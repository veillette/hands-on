#!/usr/bin/env node
/**
 * Fix incorrectly indented admonition closing tags in MyST Markdown files.
 *
 * The closing ::: of an admonition should be at the same indentation level
 * as the opening :::{directive}. This script finds mismatched closing tags
 * and corrects their indentation.
 */

const fs = require('fs');
const path = require('path');

/**
 * Fix admonition closing tag indentation to match opening tags.
 * @param {string} content - The file content to process
 * @returns {string} The fixed content
 */
function fixAdmonitionClosings(content) {
  const lines = content.split('\n');
  const result = [];

  // Stack to track opening directives: {lineIndex, indentation}
  const directiveStack = [];

  // Pattern for opening directive: optional whitespace + :::{something}
  const openingPattern = /^(\s*):::\{/;
  // Pattern for closing directive: optional whitespace + ::: (not followed by {)
  const closingPattern = /^(\s*):::(\s*)$/;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const openingMatch = line.match(openingPattern);
    const closingMatch = line.match(closingPattern);

    if (openingMatch) {
      // Track the indentation of this opening directive
      const indent = openingMatch[1];
      directiveStack.push({ lineIndex: i, indentation: indent });
      result.push(line);
    } else if (closingMatch) {
      const currentIndent = closingMatch[1];

      if (directiveStack.length > 0) {
        // Get the indentation of the matching opening directive
        const { indentation: expectedIndent } = directiveStack.pop();

        if (currentIndent !== expectedIndent) {
          // Fix the indentation
          result.push(expectedIndent + ':::');
        } else {
          result.push(line);
        }
      } else {
        // No matching opening - keep as-is (might be a code block fence)
        result.push(line);
      }
    } else {
      result.push(line);
    }
  }

  return result.join('\n');
}

/**
 * Process a single file. Returns true if changes were made.
 * @param {string} filepath - Path to the file to process
 * @param {boolean} dryRun - If true, don't write changes
 * @returns {boolean} True if changes were made
 */
function processFile(filepath, dryRun = false) {
  const content = fs.readFileSync(filepath, 'utf8');
  const fixedContent = fixAdmonitionClosings(content);

  if (content !== fixedContent) {
    if (dryRun) {
      console.log(`Would fix: ${filepath}`);
    } else {
      fs.writeFileSync(filepath, fixedContent, 'utf8');
      console.log(`Fixed: ${filepath}`);
    }
    return true;
  }
  return false;
}

function main() {
  const dryRun = process.argv.includes('--dry-run');

  const contentDir = path.join(__dirname, '..', 'content');

  if (!fs.existsSync(contentDir)) {
    console.error(`Content directory not found: ${contentDir}`);
    process.exit(1);
  }

  const mdFiles = fs
    .readdirSync(contentDir)
    .filter(file => file.endsWith('.md'))
    .map(file => path.join(contentDir, file))
    .sort();

  let fixedCount = 0;
  for (const filepath of mdFiles) {
    if (processFile(filepath, dryRun)) {
      fixedCount++;
    }
  }

  console.log(`\n${dryRun ? 'Would fix' : 'Fixed'} ${fixedCount} file(s)`);
}

if (require.main === module) {
  main();
}

module.exports = { fixAdmonitionClosings, processFile };
