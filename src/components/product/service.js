const Dao = require('./dao');

async function  getProduct() {
  return await Dao.getProduct();
}
async function  crudProduct(datos) {
  return await Dao.crudProduct(datos);
}

module.exports = {
  getProduct,
  crudProduct
};
