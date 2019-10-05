import { INTEGER } from 'sequelize';

export default {
  options: {
    tableName: 'CHAT',
    freezeTableName: false,
    timestamps: false,
  },
  attributes: {
    user_id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    provider_id: {
      type: INTEGER,
      allowNull: false,
    },
    chat_id: {
      type: INTEGER,
      allowNull: false,
    },
  },
};
