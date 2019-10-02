import express from 'express';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {}

  routes() {}
}

export default new App().server; // Singleton: todos que importarem usarão da mesma instância
