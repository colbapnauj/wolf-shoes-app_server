const  { Schema, model } = require('mongoose');

const ProductoSchema = Schema({
    id_modelo: {
        type: String,
        required: true
    },
    id_talla: { 
        type: String,
        require: true
    },
    id_color: {
        type: String,
        require: true
    },
    cantidad: {
        type: String,
        require: true
    },
    precio: {
        type: String,
        require: true
    }
});

ProductoSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;

});

module.exports = model('Producto', ProductoSchema);