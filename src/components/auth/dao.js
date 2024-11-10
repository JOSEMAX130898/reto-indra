const { connect } = require('../../db');
const Model = require('./model');

async function crudUser(email, password) {
  const connection = await connect();
  const user = new Model(email, password);
  try {
    const [result] = await connection.execute('CALL fnUserCrud(?, ?)', [user.email, user.password]);
    return result[0][0];
  } finally {
    connection.end();
  }
}

async function loginUser(email) {
  const connection = await connect();
  const user = new Model(email);
  try {
    const [result] = await connection.execute('CALL fnUserLogin(?)', [user.email]);
    return result[0][0];
  } finally {
    connection.end();
  }
}

module.exports = {
  crudUser,
  loginUser
};