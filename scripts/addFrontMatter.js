const fs = require('fs').promises;
const path = require('path');
const { execSync } = require('child_process');

/**
 * Gets the repository URL from git remote or environment variables.
 * Falls back to a placeholder if not available.
 */
function getRepositoryUrl() {
  // Check for GitHub Actions environment variables first
  if (process.env.GITHUB_REPOSITORY) {
    return `https://github.com/${process.env.GITHUB_REPOSITORY}`;
  }

  // Try to get from git remote
  try {
    const remoteUrl = execSync('git remote get-url origin', {
      encoding: 'utf8',
      stdio: ['pipe', 'pipe', 'pipe']
    }).trim();

    // Convert SSH URL to HTTPS if needed
    if (remoteUrl.startsWith('git@github.com:')) {
      return remoteUrl
        .replace('git@github.com:', 'https://github.com/')
        .replace(/\.git$/, '');
    }
    // Clean up HTTPS URL
    return remoteUrl.replace(/\.git$/, '');
  } catch {
    // Fallback: try to read from package.json
    try {
      const packageJson = require('../package.json');
      if (packageJson.repository?.url) {
        return packageJson.repository.url
          .replace(/^git\+/, '')
          .replace(/\.git$/, '');
      }
    } catch {
      // Ignore errors
    }
  }

  // Final fallback - use placeholder
  console.warn(
    'Warning: Could not determine repository URL. Using placeholder.'
  );
  return 'https://github.com/OWNER/REPO';
}

/**
 * Gets the default branch name from environment or git.
 */
function getDefaultBranch() {
  // Check for GitHub Actions environment variable
  if (process.env.GITHUB_REF_NAME) {
    return process.env.GITHUB_REF_NAME;
  }

  // Try to get current branch from git
  try {
    return execSync('git rev-parse --abbrev-ref HEAD', {
      encoding: 'utf8',
      stdio: ['pipe', 'pipe', 'pipe']
    }).trim();
  } catch {
    return 'main';
  }
}

/**
 * Gets the content directory path, supporting custom configuration.
 */
function getContentDir() {
  return process.env.CONTENT_DIR || path.join(__dirname, '../content');
}

async function addFrontmatterToMarkdownFiles() {
  const contentDir = getContentDir();
  const repoUrl = getRepositoryUrl();
  const branch = getDefaultBranch();
  const contentPath = path.relative(
    path.join(__dirname, '..'),
    contentDir
  ) || 'content';

  console.log(`Repository URL: ${repoUrl}`);
  console.log(`Branch: ${branch}`);
  console.log(`Content directory: ${contentDir}`);

  try {
    // Get all files in the content directory
    const files = await fs.readdir(contentDir);

    // Filter for markdown files
    const markdownFiles = files.filter(
      file => file.endsWith('.md') || file.endsWith('.markdown')
    );

    console.log(
      `Found ${markdownFiles.length} markdown files in the content directory`
    );

    // Process each markdown file
    for (const file of markdownFiles) {
      const filePath = path.join(contentDir, file);

      // Read the file content
      let content = await fs.readFile(filePath, 'utf8');

      // Extract chapter name from filename
      const baseName = path.basename(file, path.extname(file));
      let chapterName;

      // Determine if it's a chapter or appendix
      if (baseName.toLowerCase().startsWith('chapter')) {
        chapterName = baseName;
      } else if (baseName.toLowerCase().startsWith('appendix')) {
        chapterName = baseName;
      } else if (baseName.match(/^ch\d+/i)) {
        const number = baseName.match(/\d+/)[0];
        chapterName = `chapter${number}`;
      } else if (baseName.match(/^app\d+/i)) {
        const number = baseName.match(/\d+/)[0];
        chapterName = `appendix${number}`;
      } else {
        chapterName = baseName;
      }

      // Create frontmatter with repository-agnostic URLs
      const frontmatter = `---
exports:
  - format: md
    output: exports/${chapterName}.md
    id: ${chapterName}md
  - format: pdf
    template: lapreprint-typst
    output: exports/${chapterName}.pdf
    id: ${chapterName}pdf
  - format: docx
    template: curvenote
    output: exports/${chapterName}.docx
    id: ${chapterName}docx
downloads:
  - id: ${chapterName}md
    title: markdown
  - id: ${chapterName}pdf
    title: PDF
  - id: ${chapterName}docx
    title: docx
edit_url: ${repoUrl}/blob/${branch}/${contentPath}/${file}
---`;

      // Check if file already has frontmatter
      if (content.trimStart().startsWith('---')) {
        console.log(`${file} already has frontmatter. Skipping.`);
        continue;
      }

      // Add frontmatter to the beginning of the file
      const newContent = `${frontmatter}\n\n${content}`;

      // Write the modified content back to the file
      await fs.writeFile(filePath, newContent, 'utf8');

      console.log(`Added frontmatter to ${file} with chapter name: ${chapterName}`);
    }

    console.log('Process completed successfully');
  } catch (error) {
    console.error('Error processing markdown files:', error);
    process.exit(1);
  }
}

// Run the function
addFrontmatterToMarkdownFiles();
