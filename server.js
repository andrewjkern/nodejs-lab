"use strict";
const http = require("http");
const { quotes } = require("./quotes.js");

let randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];
http
  .createServer((req, res) => {
    res.write(
      JSON.stringify(quotes[Math.floor(Math.random() * quotes.length)])
    );
    res.end();
  })
  .listen(3000),
  () => {
    console.log("Your server is listening on port", 3000);
  };
