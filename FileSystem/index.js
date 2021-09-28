//importing the required
const fs = require("fs");
const http = require("http");

//creating port and server
const port = 3001;
const server = http.createServer((req, res) => {
  //if get request at / then we create file with current date/time
  if (req.url == "/") {
    fs.writeFile(
      "./currentDateTime.txt",
      new Date().toString(),
      "utf8",
      (err) => {
        if (err) {
          throw err;
        }
        console.log("file saved!");
      }
    );
    res.write("file saved!");
    res.end();
  }
});
server.listen(port);
