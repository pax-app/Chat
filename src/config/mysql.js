require('dotenv/config');

export default {
  dialect: 'mysql',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: 3306,
  dialectOptions: {
    dateStrings: true,
    typeCast: true,
  },
  timezone: '-03:00',
  logging: process.env.NODE_ENV === 'development',
};
