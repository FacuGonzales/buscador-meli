'use strict'

var app = require('./server/app');
var port = process.env.port || 4000;

app.listen(port, () =>{
    console.log('Servidor corriendo correctamente......')
});