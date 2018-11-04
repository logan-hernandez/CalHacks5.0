const express = require("express");
const http = require("http");
const port = 5000;
const app = express();
let server = http.createServer(app);
const ioServer = require("socket.io")(server)

ioServer.on("connection", socket => {
  socket.emit("event", 50);
  console.log("user connected");
});

server.listen(port);