const mongoose = require('mongoose')

const dbConnection = async() => {

    try {
        
        // CONEXION A LA BASE DE DATOS
        await mongoose.connect( process.env.DB_CNN );

        console.log('db online');

    } catch (error) {
        console.log(error);
        throw new Error('Error en la base de datos');
    }
}

module.exports = {
    dbConnection
}