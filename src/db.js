const mysql = require('mysql2/promise');
const config = require('./config');
async function connect() {
  const connection = await mysql.createConnection({
    host: config.mysqlHost,
    user: config.mysqlUser,
    password: config.mysqlPassword,
    database: config.mysqlDatabase
  });
  return connection;
}

module.exports = { connect };