if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
  }
// Acceder a las variables de entorno
const nodeEnv = process.env.NODE_ENV;
const port = process.env.PORT;
const mysqlHost = process.env.MYSQL_HOST;
const mysqlUser = process.env.MYSQL_USER;
const mysqlPassword = process.env.MYSQL_PASSWORD;
const mysqlDatabase = process.env.MYSQL_DATABASE;
const urlSwapi = process.env.URL_SWAPI;

const appSecretAccess = process.env.APP_SECRET_ACCESS;
const appSecretAccessTime = process.env.APP_SECRET_ACCESS_TIME;

// Crear el objeto de configuración
const config = {
    nodeEnv,
    port,
    mysqlHost,
    mysqlUser,
    mysqlPassword,
    mysqlDatabase,
    urlSwapi,
    appSecretAccess,
    appSecretAccessTime
};

// Exportar el objeto de configuración
module.exports = config;