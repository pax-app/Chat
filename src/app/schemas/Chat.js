import { INTEGER } from 'sequelize';

export default {
  options: {
    tableName: 'CHAT',
    freezeTableName: false,
    timestamps: false,
  },
  attributes: {
    chat_id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: INTEGER,
      allowNull: false,
    },
    provider_id: {
      type: INTEGER,
      allowNull: false,
    },
    user_address: {
      type: INTEGER,
      allowNull: false,
    },
  },
};
