const fs = require("fs");
const http = require("http");

let server = http.createServer();

server.on("", (req, res) => {
  const rstream = fs.createReadStream("index.html");
  rstream.pipe(res);
});

server.listen(4000);
