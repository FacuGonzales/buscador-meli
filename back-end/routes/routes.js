'use strict'

var express = require('express');
var meliController = require('../controllers/meli');
var api = express.Router();

// Rutas con su controlador
api.get('/items/:search', meliController.listItems);
api.get('/item/:id', meliController.getOneItem);

module.exports = api;