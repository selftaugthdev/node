/* const http = require ("http")

// This `server` will receive data.
const server = http.createServer()

server.on("request", (req, res) => {
    console.log("A request has been submitted")
    res.end()
})

// We use our server object again to add a 'listen' method to it.

server.listen(3000, () => {
    console.log("Server started on http://127.0.0.1:3000");
}) */

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    console.log(`A request has been submitted for ${req.url}`);

    // Base directory where your HTML files are stored
    const baseDir = path.join(__dirname, 'httpClient');

    // Determine the file path based on the request URL
    let filePath;
    switch (req.url) {
        case '/':
        case '/client': // Assuming you want to serve the root file on '/client' as well
            filePath = path.join(baseDir, 'index.html');
            break;
        case '/contact':
            filePath = path.join(baseDir, 'contact/index.html');
            break;
        case '/about':
            filePath = path.join(baseDir, 'about/index.html');
            break;
        case '/blog':
            filePath = path.join(baseDir, 'blog/index.html');
            break;
        default:
            // Handle 404 Not Found
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 Not Found</h1>');
            return;
    }

    // Read and send the file
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end('<h1>500 Internal Server Error</h1>');
            console.error(err);
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        }
    });
});

server.listen(3000, () => {
    console.log("Server started on http://127.0.0.1:3000");
});
