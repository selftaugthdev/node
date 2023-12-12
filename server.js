const http = require ("http")

// This `server` will receive data.
const server = http.createServer()

server.on("request", (request, response) => {
    // Do something here
})

// We use our server object again to add a 'listen' method to it.

server.listen(3000, () => {
    console.log("Server started on http://127.0.0.1:3000");
})