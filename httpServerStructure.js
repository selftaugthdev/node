const fs = require("fs");
const path = require("path");

// Function to create an HTML file with inline CSS
function createHtmlWithInlineCss(title, backgroundColor, dirPath, fileName) {
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <title>${title}</title>
    <style>
        body { background-color: ${backgroundColor}; }
    </style>
</head>
<body>
    <h1>${title}</h1>
</body>
</html>
`;
    fs.writeFileSync(path.join(dirPath, fileName), htmlContent, { encoding: 'utf8' });
}

// Create a directory
const baseDir = "httpClient";
fs.mkdirSync(baseDir);

// Create HTML files with inline CSS
createHtmlWithInlineCss('Client', '#FF0000', baseDir, 'index.html');  // Red
createHtmlWithInlineCss('Contact', '#0000FF', path.join(baseDir, 'contact'), 'index.html');  // Blue
createHtmlWithInlineCss('About', '#39FF14', path.join(baseDir, 'about'), 'index.html');  // Neon Green
createHtmlWithInlineCss('Blog', '#FFFF00', path.join(baseDir, 'blog'), 'index.html');  // Yellow

// Create subdirectories and HTML files
['contact', 'about', 'blog'].forEach(subDir => {
    const dirPath = path.join(baseDir, subDir);
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
    }
});
