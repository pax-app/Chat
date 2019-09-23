const express = require("express");

const PORT = 3000;

const HOST = "0.0.0.0";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

console.log(`Acess in http://${HOST}:${PORT}`);

app.listen(PORT, HOST);
