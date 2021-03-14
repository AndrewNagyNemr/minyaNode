const http = require("http");

const server = http.createServer((req, res) => {
  const { url, method } = req;
  if (url === "/" && method === "GET") {
    res.write("<h1>Hello</h1>");
    return res.end();
  }
  if (url === "/users" && method === "GET") {
    res.write("<h1>Users</h1>");
    return res.end();
  }
  res.write("<h1>Not Found</h1>");
  res.end();
});

server.listen(5000);
