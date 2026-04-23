import { cpSync, mkdirSync, readdirSync, writeFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { join, basename, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const H5P_SRC = join(ROOT, 'h5p');
const BUILD_HTML = join(ROOT, '_build', 'html');
const H5P_DEST = join(BUILD_HTML, 'h5p-content');
const LIBS_DEST = join(BUILD_HTML, 'libs', 'h5p');
const LIBS_SRC = join(ROOT, 'node_modules', 'h5p-standalone', 'dist');

// Paths relative to player.html (lives two levels below BUILD_HTML)
const LIBS = '../../libs/h5p';

const PLAYER_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>* { box-sizing: border-box; } body { margin: 0; padding: 8px; }</style>
  <link rel="stylesheet" href="${LIBS}/styles/h5p.css">
</head>
<body>
  <div id="h5p-container"></div>
  <script src="${LIBS}/main.bundle.js"></script>
  <script>
    (function () {
      const container = document.getElementById('h5p-container');
      if (!window.H5PStandalone || !window.H5PStandalone.H5P) {
        container.innerHTML =
          '<p style="color:red;padding:1rem">Failed to load H5P player: H5PStandalone is unavailable.</p>';
        return;
      }

      new window.H5PStandalone.H5P(container, {
        h5pJsonPath: '.',
        frameJs: '${LIBS}/frame.bundle.js',
        frameCss: '${LIBS}/styles/h5p.css'
      }).catch(function (err) {
        container.innerHTML =
          '<p style="color:red;padding:1rem">Failed to load H5P content: ' + err.message + '</p>';
      });
    })();
  </script>
</body>
</html>`;

// Copy h5p-standalone dist files to _build/html/libs/h5p/
console.log('Copying h5p-standalone library → libs/h5p/');
mkdirSync(LIBS_DEST, { recursive: true });
cpSync(LIBS_SRC, LIBS_DEST, { recursive: true });

// Extract each .h5p package
mkdirSync(H5P_DEST, { recursive: true });

const files = readdirSync(H5P_SRC).filter(f => extname(f) === '.h5p');

if (files.length === 0) {
  console.log('No .h5p files found in h5p/ — skipping extraction.');
  process.exit(0);
}

for (const file of files) {
  const name = basename(file, '.h5p');
  const dest = join(H5P_DEST, name);
  console.log(`Extracting ${file} → h5p-content/${name}/`);
  mkdirSync(dest, { recursive: true });
  execSync(`unzip -q -o "${join(H5P_SRC, file)}" -d "${dest}"`);
  writeFileSync(join(dest, 'player.html'), PLAYER_HTML);
}

console.log(`Done — extracted ${files.length} H5P package(s).`);
