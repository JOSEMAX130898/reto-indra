const Service = require('./service');

async function crudUser(req, res) {
  try {
    const body = req.body;
    const response = await Service.crudUser(body);
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

async function loginUser(req, res) {
  try {
    const body = req.body;
    const response = await Service.loginUser(body);
    return res.status(200).send({
      "bEstado": true,
      "iCodigo": 0,
      "Obj": response
    })
  } catch (error) {
    return res.status(400).send({
      "bEstado": false,
      "iCodigo": -1,
      "sRpta": error?.message ?? "error login"
    })
  }
}

module.exports = {
  crudUser,
  loginUser
};