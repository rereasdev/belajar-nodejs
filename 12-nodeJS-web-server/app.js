const http = require("http");
const fs = require("fs");

const port = 3000;

const getPage = (path, result) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      result.writeHead(404);
      result.write("Error: file not found");
    } else {
      result.write(data);
    }
    result.end();
  });
};
http
  .createServer((request, result) => {
    result.writeHead(200, {
      "Content-Type": "text/html",
    });
    const url = request.url;
    switch (url) {
      case "/about":
        getPage("./about.html", result);
        break;
      default:
        getPage("./index.html", result);
        break;
    }
  })
  .listen(port, () => {
    console.log(`Server is istening on port ${port}...`);
  });
