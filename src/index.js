const express = require("express");
const http = require('http');
const socketio = require('socket.io');
const path = require("path");

const app = express();
const server = http.createServer(app); // create the HTTP server using the Express app created on previous line
const io = socketio(server); // connect Socket.IO to the HTTP server

const publicDirectoryPath = path.join(__dirname, '../public');
app.use(express.static(publicDirectoryPath));

io.on('connection', () => { // listen for new connections to Socket.IO
  console.log('A new player just connected');
  })

const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log(`Server is up on port ${port}.`);
});