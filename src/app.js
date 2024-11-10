'use sctrict'
const express = require('express')  
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const path = require('path')  

const cors = require('cors')
const app = express()
const helmet = require('helmet')
const router = require('./routes')

// require("./db.js");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(helmet());

app.use('/', router);


// Configuración de Swagger
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Example',
            version: '1.0.0',
            description: 'Una API de ejemplo con Swagger y Node.js',
        },
    },
    apis: [`${path.join(__dirname,'./routes/*')}`,
    `${path.join(__dirname,'./swagger/*')}`,
],};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', function(req, res){
    res.send("");
});

app.get('/ejemplo', function(req, res){
    res.send("ss");
});

module.exports = app