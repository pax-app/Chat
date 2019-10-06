require('dotenv/config');

export default {
  // dialect: 'mysql',
  // host: process.env.DB_STRING,
  // username: process.env.DB_USER,
  // password: process.env.DB_PASS,
  // database: process.env.DB_NAME,
  // define: {
  //   timestamps: true,
  //   underscored: true,
  //   underscoredAll: true,
  // },
  dialect: 'mysql',
  port: 3306,
  server: 'localhost',
  name: 'Pax',
  database: 'dbPax',
  username: 'rogeriojunior',
  password: '03023021',
};

// module.exports = {
//   dialect: 'mysql',
//   host: process.env.DB_HOST,
//   username: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME,
//   define: {
//     timestamps: true,
//     underscored: true,
//     underscoredAll: true,
//   },
// };

// const connection = new Sequelize(process.env.POSTGRES_URL, {
//   operatorAliases: false,
//   logging: false,
//   quoteIdentifiers: false,
//   ssl: process.env.SSL_DB,
//   dialectOptions: {
//     ssl: process.env.SSL_DB
//   }
// })

// var sequelize = new Sequelize({
//   dialect: 'mssql',
//   dialectModulePath: 'sequelize-msnodesqlv8',
//   dialectOptions: {
//     connectionString: 'Server=localhost\MSSQLSERVER01;Database=master; Trusted_Connection=yes;'
//   },
// });
