const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'pages');

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      const original = content;
      // Also remove bg-[#134e4a]/x if any, or just focus on text as user asked
      content = content.replace(/text-\[#134e4a\]\/\d+/g, 'text-[#134e4a]');
      // The user complained about grey color not visible. We could also check text-[#134e4a] itself, 
      // but without opacity, it's a very dark green/gray, which is perfectly readable.
      // What about black/grey from other tailwind utilities like text-gray-500?
      content = content.replace(/text-gray-\d+/g, 'text-gray-900');
      
      if (content !== original) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated ${file}`);
      }
    }
  }
}

replaceInDir(srcDir);
console.log('Script completed.');
