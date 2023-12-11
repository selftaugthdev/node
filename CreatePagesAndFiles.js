const fs = require("fs");
const path = require("path");

const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <title>Client</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Client</h1>
</body>
</html>
`;
fs.mkdirSync("client");
fs.writeFileSync('./client/index.html', htmlContent, { encoding: 'utf8' });

// CSS content with a specific background color for the body
const cssContent = `body { background-color: #FF0000; }`; // Red

fs.writeFileSync('./client/style.css', cssContent, { encoding: 'utf8' });

// Contact /////////////////////////////
const htmlContentContact = `
<!DOCTYPE html>
<html>
<head>
    <title>Client</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Contact</h1>
</body>
</html>
`;
fs.mkdirSync("./client/contact");
fs.writeFileSync('./client/contact/index.html', htmlContentContact, { encoding: 'utf8' });

// CSS content with a specific background color for the body
const cssContentContact = `body { background-color: #0000FF; }`; // Blue

fs.writeFileSync('./client/contact/style.css', cssContentContact, { encoding: 'utf8' });

// About /////////////////////////////
const htmlContentAbout = `
<!DOCTYPE html>
<html>
<head>
    <title>Client</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>About</h1>
</body>
</html>
`;
fs.mkdirSync("./client/about");
fs.writeFileSync('./client/about/index.html', htmlContentAbout, { encoding: 'utf8' });

// CSS content with a specific background color for the body
const cssContentAbout = `body { background-color: #39FF14; }`; // Neon Green

fs.writeFileSync('./client/about/style.css', cssContentAbout, { encoding: 'utf8' });

// Blog /////////////////////////////
const htmlContentBlog = `
<!DOCTYPE html>
<html>
<head>
    <title>Client</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Blog</h1>
</body>
</html>
`;
fs.mkdirSync("./client/blog");
fs.writeFileSync('./client/blog/index.html', htmlContentBlog, { encoding: 'utf8' });

// CSS content with a specific background color for the body
const cssContentBlog = `body { background-color: #FFFF00; }`; // Yellow

fs.writeFileSync('./client/blog/style.css', cssContentBlog, { encoding: 'utf8' });