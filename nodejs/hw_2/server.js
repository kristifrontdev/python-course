const http = require("http");
const fs = require("fs");
const path = require("path");

const requests = [
  {
    method: "GET",
    url: "/",
    action: (req, res) => {
      res.setHeader("Content-Type", "text/plain");
      res.end("Home Page");
    },
  },
  {
    method: "GET",
    url: "/about",
    action: (req, res) => {
      res.setHeader("Content-Type", "text/plain");
      res.end("About Page");
    },
  },
  {
    method: "POST",
    url: "/echo",
    action: (req, res) => {
      res.setHeader("Content-Type", "text/plain");
      res.end(new Date().toISOString());
    },
  },
  {
    method: "GET",
    url: "/htmlfile",
    action: (req, res) => {
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      const filePath = path.join(__dirname, "public", "file.html");
      fs.readFile(filePath, "utf8", (err, data) => {
        res.end(data);
      });
    },
  },
  {
    method: "GET",
    url: "/image",
    action: (req, res) => {
      res.setHeader("Content-Type", "image/png");
      const filePath = path.join(__dirname, "public", "image.png");
      fs.readFile(filePath, (err, data) => {
        res.end(data);
      });
    },
  },
];

const server = http.createServer((req, res) => {
  res.on("finish", () => {
    const log = `${new Date().toISOString()} ${req.method} ${res.statusCode} ${req.url}\n`;
    fs.writeFile("log.data", log, { encoding: "utf8", flag: "a" }, (err) => {
      if (err) {
        console.error("Error:", err);
      }
    });
  });

  const request = requests.find((request) => request.method === req.method && request.url === req.url);
  if (request) {
    request.action(req, res);
  } else {
    res.statusCode = 404;
    res.end("404 page");
  }
});

server.listen(5002, () => {
  console.log("Running on port 5002");
});
