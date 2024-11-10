const Service = require('./service');

async function getProductos(req, res) {
  try {
    const response = await Service.getProduct();
    return res.status(200).send({
      "bEstado": true,
      "iCodigo": 0,
      "Obj": response
    })
  } catch (error) {
    return res.status(400).send({
      "bEstado": false,
      "iCodigo": -1,
      "sRpta": "error al guardar " + error
    })
  }
}
async function crudProduct(req, res) {
  try {
    //req.body.accion==I (INSERT)
    //req.body.accion==U (UPDATE)
    //req.body.accion==D (DELETE)
    const body = req.body;
    const response = await Service.crudProduct(body);
    return res.status(200).send({
      "bEstado": true,
      "iCodigo": 0,
      "Obj": response
    })
  } catch (error) {
    return res.status(400).send({
      "bEstado": false,
      "iCodigo": -1,
      "sRpta": "error al guardar " + error
    })
  }
}

module.exports = {
  getProductos,
  crudProduct
};