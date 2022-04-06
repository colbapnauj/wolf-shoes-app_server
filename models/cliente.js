const  { Schema, model } = require('mongoose');

const ClienteSchema = Schema({
    dni: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    apellidoPaterno: {
        type: String,
        required: true
    },
    apellidoMaterno: {
        type: String,
        require: true
    },
    telefono: {
        type: String,
        require: true
    },
    direccion: {
        type: String,
        require: true
    }
});

ClienteSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;

});

module.exports = model('Cliente', ClienteSchema);