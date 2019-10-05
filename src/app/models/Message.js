import Sequelize, { Model } from 'sequelize';

class Message extends Model {
  static init(sequelize) {
    super.init(
      {
        message_id: Sequelize.INTEGER,
        sender_id: Sequelize.INTEGER,
        date_time_sent: Sequelize.TIME,
        text_message: Sequelize.STRING(500),
        chat_id: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Chat, { foreignKey: 'chat_id' });
  }
}

export default Message;
