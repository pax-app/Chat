import { INTEGER, STRING, DATE, ENUM } from 'sequelize';

export default {
  options: {
    tableName: 'MESSAGE',
    freezeTableName: false,
    timestamps: false,
  },
  attributes: {
    chat_id: {
      type: INTEGER(11),
      references: {
        model: 'CHAT',
        key: 'chat_id',
        onDelete: 'cascade',
      },
    },
    message_id: {
      type: INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    sender: {
      type: ENUM,
      values: ['P', 'U'],
      allowNull: false,
    },
    date_time_sent: {
      type: DATE,
      allowNull: false,
    },
    text_message: {
      type: STRING(500),
      allowNull: false,
    },
  },
};
