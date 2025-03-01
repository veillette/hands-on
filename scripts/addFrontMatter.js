const fs = require('fs').promises;
const path = require('path');

async function addFrontmatterToMarkdownFiles() {
  const contentDir = path.join(__dirname, '../content');

  try {
    // Get all files in the content directory
    const files = await fs.readdir(contentDir);

    // Filter for markdown files
    const markdownFiles = files.filter(file =>
      file.endsWith('.md') || file.endsWith('.markdown')
    );

    console.log(`Found ${markdownFiles.length} markdown files in the content directory`);

    // Process each markdown file
    for (const file of markdownFiles) {
      const filePath = path.join(contentDir, file);

      // Read the file content
      let content = await fs.readFile(filePath, 'utf8');

      // Extract chapter name from filename
      // Remove file extension and get chapter name
      const baseName = path.basename(file, path.extname(file));
      let chapterName;

      // Try to determine if it's a chapter or appendix
      if (baseName.toLowerCase().startsWith('chapter')) {
        chapterName = baseName;
      } else if (baseName.toLowerCase().startsWith('appendix')) {
        chapterName = baseName;
      } else if (baseName.match(/^ch\d+/i)) {
        // Handle formats like ch4, CH4, etc.
        const number = baseName.match(/\d+/)[0];
        chapterName = `chapter${number}`;
      } else if (baseName.match(/^app\d+/i)) {
        // Handle formats like app1, APP1, etc.
        const number = baseName.match(/\d+/)[0];
        chapterName = `appendix${number}`;
      } else {
        // Default to using the filename as is
        chapterName = baseName;
      }

      // Create frontmatter with the extracted chapter name
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
  }
}

// Run the function
addFrontmatterToMarkdownFiles();
