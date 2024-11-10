const Dao = require('./dao');
const { hashPassword, comparePassword, generateSignature } = require('../../utils/bcrypt');

async function crudUser(datos) {
  const email = datos.email;
  const password = datos.password;
  const newPassword = await hashPassword(password);
  return await Dao.crudUser(email, newPassword);
}

async function loginUser(datos) {
  const email = datos.email;
  const password = datos.password;
  const response =  await Dao.loginUser(email);
  if(response?.result >= 0){
    const isMatch = await comparePassword(password, response.message);
    if (!isMatch) {
      throw new Error('Contraseña incorrecta');
    } else {
      const {  token_access} = await generateSignature(response);
      return {
         email: email,
         token_access: token_access
         };
    }
  }
  throw new Error('Credenciales incorrectas');
}

module.exports = {
  crudUser,
  loginUser
};
