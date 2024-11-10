/**
 * Codigo que se usa en pruebas locales.
 * Esta version usa .env en lugar del serverless.yaml
 * 
 * Para correr en lambda, usar `index.js`.
 */
const config = require('./src/config');

const app = require("./src/app")
const port = config.port??3000;

app.listen(port, () => { 
    ("Running on port", port);
    ("Environment", process.env.NODE_ENV);
    console.log("Server is running on port", port);
});