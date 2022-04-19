// request is a library that makes http requests and is better than using net
const request = require("request");
const fs = require("fs");

const args = process.argv.slice(2);
const url = args[0];
const path = args[1];

request(url, (error, response, body) => {
  if (error) {
    console.log("Error: ", error);
  }
  fs.writeFile(path, body, (err) => {
    if (err) {
      console.log("Error: ", err);
      return;
    }
    fs.stat(path, (err, stats) => {
      if (err) {
        console.log("Error: ", err);
      }
      console.log(`Downloaded and saved ${stats.size} bytes to ${path}`);
    });
  });
});
