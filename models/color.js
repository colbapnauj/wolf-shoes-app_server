const  { Schema, model } = require('mongoose');

const ColorSchema = Schema({
    cod_ta: {
        type: String,
        required: true
    },
    talla: {
        type: String,
        required: true
    },
});

ColorSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;

});

module.exports = model('Color', ColorSchema);