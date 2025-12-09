#!/usr/bin/env python3
"""
Fix incorrectly indented admonition closing tags in MyST Markdown files.

The closing ::: of an admonition should be at the same indentation level
as the opening :::{directive}. This script finds mismatched closing tags
and corrects their indentation.
"""

import re
import sys
from pathlib import Path


def fix_admonition_closings(content: str) -> str:
    """Fix admonition closing tag indentation to match opening tags."""
    lines = content.split('\n')
    result = []

    # Stack to track opening directives: (line_index, indentation)
    directive_stack = []

    # Pattern for opening directive: optional whitespace + :::{something}
    opening_pattern = re.compile(r'^(\s*):::\{')
    # Pattern for closing directive: optional whitespace + ::: (not followed by {)
    closing_pattern = re.compile(r'^(\s*):::(\s*)$')

    for i, line in enumerate(lines):
        opening_match = opening_pattern.match(line)
        closing_match = closing_pattern.match(line)

        if opening_match:
            # Track the indentation of this opening directive
            indent = opening_match.group(1)
            directive_stack.append((i, indent))
            result.append(line)
        elif closing_match:
            current_indent = closing_match.group(1)

            if directive_stack:
                # Get the indentation of the matching opening directive
                _, expected_indent = directive_stack.pop()

                if current_indent != expected_indent:
                    # Fix the indentation
                    result.append(expected_indent + ':::')
                else:
                    result.append(line)
            else:
                # No matching opening - keep as-is (might be a code block fence)
                result.append(line)
        else:
            result.append(line)

    return '\n'.join(result)


def process_file(filepath: Path, dry_run: bool = False) -> bool:
    """Process a single file. Returns True if changes were made."""
    content = filepath.read_text()
    fixed_content = fix_admonition_closings(content)

    if content != fixed_content:
        if dry_run:
            print(f"Would fix: {filepath}")
        else:
            filepath.write_text(fixed_content)
            print(f"Fixed: {filepath}")
        return True
    return False


def main():
    dry_run = '--dry-run' in sys.argv

    content_dir = Path(__file__).parent.parent / 'content'

    if not content_dir.exists():
        print(f"Content directory not found: {content_dir}")
        sys.exit(1)

    md_files = list(content_dir.glob('*.md'))

    fixed_count = 0
    for filepath in sorted(md_files):
        if process_file(filepath, dry_run):
            fixed_count += 1

    print(f"\n{'Would fix' if dry_run else 'Fixed'} {fixed_count} file(s)")


if __name__ == '__main__':
    main()
