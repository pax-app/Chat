const express = require("express");

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() { }

  routes() { }
}

module.exports = new App().server;