const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'dist', 'index.html');
let content = fs.readFileSync(indexPath, 'utf8');

// Replace absolute paths with relative paths
content = content.replace(/href="\//g, 'href="./');
content = content.replace(/src="\//g, 'src="./');

// Also fix the title - remove the 404 error
content = content.replace(/<title>404: This page could not be found\.<\/title>/g, '<title>TaxWise Parañaque</title>');

fs.writeFileSync(indexPath, content);
console.log('Paths fixed!');