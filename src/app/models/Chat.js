import Sequelize, { Model } from 'sequelize';

class Chat extends Model {
  static init(sequelize) {
    super.init(
      {
        user_id: Sequelize.INTEGER,
        provider_id: Sequelize.INTEGER,
        chat_id: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default Chat;
