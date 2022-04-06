const  { Schema, model } = require('mongoose');

const DetalleProforma = Schema({
    cod_proforma: {
        type: String,
        required: true
    },
    cod_producto: {
        type: int,
        required: true
    },
    cantidad: {
        type: int,
        required: true
    },
    precio_detalle: {
        type: double,
        required: true
    }
});

DetalleProforma.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;

});

module.exports = model('DetalleProforma', DetalleProforma);