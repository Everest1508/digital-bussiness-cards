import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read the data.json file
const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../src/data/data.json'), 'utf8'));

// Create the dist directory if it doesn't exist
const distDir = path.join(__dirname, '../dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Create a directory for each user's page
data.forEach(user => {
  const userDir = path.join(distDir, user.slug);
  if (!fs.existsSync(userDir)) {
    fs.mkdirSync(userDir, { recursive: true });
  }

  // Create an index.html file for each user
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${user.name} - Digital Card</title>
        <script>
          window.__INITIAL_DATA__ = ${JSON.stringify(user)};
        </script>
      </head>
      <body>
        <div id="root"></div>
        <script type="module" src="/src/main.tsx"></script>
      </body>
    </html>
  `;

  fs.writeFileSync(path.join(userDir, 'index.html'), htmlContent);
});

console.log('Static pages generated successfully!'); 