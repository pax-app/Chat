import Sequelize from 'sequelize';
import SequelizeConfig from '../config/mysql';

import Chat from '../app/models/Chat';

const models = [Chat];
class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(SequelizeConfig);
    models.map(model => model.init(this.connection));
  }
}

export default new Database(); // Singleton
