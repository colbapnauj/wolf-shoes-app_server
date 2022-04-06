const  { Schema, model } = require('mongoose');

const Proforma = Schema({
    cod_proforma: {
        type: String,
        required: true
    },
    dni_cliente: {
        type: String,
        required: true
    },
    fecha_proforma: {
        type: Date,
        required: true
    }
});

Proforma.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;

});

module.exports = model('Proforma', DetalleProforma);