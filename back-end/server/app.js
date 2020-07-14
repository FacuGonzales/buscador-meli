'use strict'

var express = require('express');
var routes = require('../routes/routes');
var bodyParser = require('body-parser');

var app = express();

// Middlewares de body-parse
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Configurar cabeceras y cors
app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', ' Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// Rutas body-parser
app.post('/', (req, res) =>{
    console.log(req.body);
    res.status(200).send({menssage: 'Prueba de ruta'});
});

// Rutas
app.use('/api', routes);

module.exports = app;