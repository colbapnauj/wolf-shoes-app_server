const express = require('express');
const path = require('path');
require('dotenv').config();

// DB Config
const { dbConnection } = require('./database/config');
dbConnection();

// App de Express
const app = express();

// Lectura y parseo del body
app.use ( express.json() );

// Node Server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');




// Path público
// const publicPath = path.resolve( __dirname, 'public' );
const publicPath = path.resolve( __dirname, 'web' );
app.use( express.static( publicPath ) );


// Mis Rutas
app.use( '/api/login', require('./routes/auth') );
app.use( '/api/register', require('./routes/register_data'));
app.use( '/api/delete', require('./routes/delete_data'));
app.use( '/api/data', require('./routes/obtener_data') );





server.listen( process.env.PORT, ( err ) => {

    if ( err ) throw new Error(err);

    console.log('Servidor corriendo en puerto', process.env.PORT );

});


