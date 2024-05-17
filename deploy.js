const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

// Build and export the Next.js project
execSync('yarn build && yarn export', { stdio: 'inherit' });

// Path to the 'out' directory
const outDir = path.join(__dirname, 'out');

// Create the '.nojekyll' file in the 'out' directory
fs.ensureFileSync(path.join(outDir, '.nojekyll'));

//.nojekyll this file ensure bypass the Jekyll processing rules in github page