import Sequelize from 'sequelize'
import SequelizeConfig from '../config/mysql'

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(SequelizeConfig);
  }
}

export default new Database(); // Singleton