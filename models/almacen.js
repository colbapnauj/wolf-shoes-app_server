const  { Schema, model } = require('mongoose');

const AlmacenSchema = Schema({
    cod_producto: {
        type: String,
        required: true
    },
    cod_talla: { 
        type: String,
        require: true
    },
    cod_color: {
        type: String,
        require: true
    },
    cod_cantidad: {
        type: int,
        require: true
    },
    precio: {
        type: double,
        require: true
    }
});

AlmacenSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;

});

module.exports = model('Almacen', AlmacenSchema);