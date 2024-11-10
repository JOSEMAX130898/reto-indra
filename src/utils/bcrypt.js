const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');

const APP_SECRET_ACCESS=  config.appSecretAccess;
const APP_SECRET_ACCESS_TIME=  config.appSecretAccessTime;
const hashPassword = async (password) => {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        return hashedPassword;
    } catch (error) {
        throw new Error('Error al encriptar la contraseña');
    }
};
const comparePassword = async (password, hashedPassword) => {
    try {
        const isMatch = await bcrypt.compare(password, hashedPassword);
        return isMatch;
    } catch (error) {
        throw new Error('Error al comparar la contraseña');
    }
};

const generateSignature = async (payload) => {
    const token = await jwt.sign(payload, APP_SECRET_ACCESS, 
            { expiresIn: APP_SECRET_ACCESS_TIME} 
    );
    const data = {
        token_access: token,
        token_expiration: APP_SECRET_ACCESS_TIME
    }
    return data
};

module.exports = {
    hashPassword,
    comparePassword,
    generateSignature
};