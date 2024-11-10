const { connect } = require('../../db');
const Model = require('./model');

async function getProduct() {
  const connection = await connect();
  try {
    const [rows] = await connection.execute('CALL fnProductList()');
    const productos = rows[0].map(row => new Model(row.id, row.name, row.description, row.price, row.stock, row.status, row.action));
    return productos;
  } finally {
    connection.end();
  }
}

async function crudProduct(datos) {
  const product = new Model(datos.id, datos.name, datos.description, datos.price, datos.stock, null, datos.action);
  const connection = await connect();
  try {
    const [result] = await connection.execute('CALL fnProductCrud(?, ?, ?, ?, ?, ?)', [product.id, product.name, product.description, product.price, product.stock, product.action]);
    return result[0][0];
  } finally {
    connection.end();
  }
}

module.exports = {
  getProduct,
  crudProduct
};