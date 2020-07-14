'use strict'

var rp = require('request-promise');
var producto = require('../models/producto');

function listItems(req, res) {
    let search = req.params.search;
    rp({uri: 'https://api.mercadolibre.com/sites/MLA/search?q='+search, json: true}).then(
        _productos => {
        let fourProductos = _productos.results.slice(0, 4);
        var productos = new Array();
        fourProductos.forEach(function(element){
            producto = {};
            producto.id = element.id;
            producto.title = element.title;
            producto.price = element.price;
            producto.free_shipping = element.shipping.free_shipping;
            producto.state_name = element.address.state_name;
            producto.img = element.thumbnail
            console.log(producto)
            productos.push(producto);
        });
        res.send(productos);
    });
}

async function getOneItem(req, res) {
    let id = req.params.id;
    let producto;
    await rp({uri: 'https://api.mercadolibre.com/items/'+id, json: true}).then(
        _producto => {
            producto = {};
            producto.id = _producto.id;
            producto.title = _producto.title;
            producto.price = _producto.price;
            let item_condicion = _producto.attributes.filter(a => a.id == 'ITEM_CONDITION');
            producto.item_condicion = item_condicion[0].value_name; 
            producto.img = _producto.pictures[0].url;
        });
    await rp({uri: 'https://api.mercadolibre.com/items/'+id+'/description', json: true}).then(
            _descripcion => {
            producto.description = _descripcion.plain_text;
            res.send(producto);
        });
};


module.exports = {
    listItems,
    getOneItem
};