const fs = require('fs').promises;
const path = require('path');

/**
 * Gets the content directory path, supporting custom configuration.
 */
function getContentDir() {
  return process.env.CONTENT_DIR || path.join(__dirname, '../content');
}

async function removeFrontmatterFromMarkdownFiles() {
  const contentDir = getContentDir();

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

    let processedCount = 0;
    let skippedCount = 0;

    // Process each markdown file
    for (const file of markdownFiles) {
      const filePath = path.join(contentDir, file);

      // Read the file content
      let content = await fs.readFile(filePath, 'utf8');

      // Check if file has frontmatter (starts with ---)
      if (content.trimStart().startsWith('---')) {
        // Find the closing --- of the frontmatter
        const startIndex = content.indexOf('---');
        let endIndex = content.indexOf('---', startIndex + 3);

        // If we found a proper frontmatter block
        if (endIndex !== -1) {
          // Remove the frontmatter, including the closing --- and any whitespace
          const newContent = content.substring(endIndex + 3).trimStart();

          // Write the modified content back to the file
          await fs.writeFile(filePath, newContent, 'utf8');

          console.log(`Removed frontmatter from ${file}`);
          processedCount++;
        } else {
          console.log(`${file} has opening --- but no closing ---. Skipping.`);
          skippedCount++;
        }
      } else {
        console.log(`${file} has no frontmatter. Skipping.`);
        skippedCount++;
      }
    }

    console.log(`Process completed successfully.`);
    console.log(`Files modified: ${processedCount}`);
    console.log(`Files skipped (no frontmatter): ${skippedCount}`);
  } catch (error) {
    console.error('Error processing markdown files:', error);
    process.exit(1);
  }
}

// Run the function
removeFrontmatterFromMarkdownFiles();
