const jwt = require('jsonwebtoken');
const config = require('../config');

const { JsonWebTokenError } = jwt;
const APP_SECRET_ACCESS = config.appSecretAccess;

module.exports = async (req, res, next) => {
    try {
        // Verificar si el token está presente en los headers de la solicitud
        const token = req.headers.authorization?.replace('JWT ', '');
        if (!token) {
            return res.status(400).json({ message: 'Token is required.' });
        }

        // Verificar y decodificar el token
        const payload = jwt.verify(token, APP_SECRET_ACCESS);
        
        // Asignar los datos del usuario al objeto 'req' para que esté disponible en el siguiente middleware o controlador
        req.user = payload;

        // Continuar con la ejecución del siguiente middleware
        next();
    } catch (error) {
        // Manejar errores de token inválido
        if (error instanceof JsonWebTokenError) {
            return res.status(401).json({ error: 'Invalid token' });
        }

        // Manejar errores no esperados (como problemas en la verificación del token)
        return res.status(500).json({ message: 'Internal server error' });
    }
};