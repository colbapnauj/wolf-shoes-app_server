const  { Schema, model } = require('mongoose');

const ZapatoSchema = Schema({
    cod_za: {
        type: String,
        required: true
    },
    modelo: {
        type: String,
        required: true
    },
});

ClienteSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;

});

module.exports = model('Zapato', ZapatoSchema);