const  { Schema, model } = require('mongoose');

const ZapatoSchema = Schema({
    cod_zapato: {
        type: String,
        required: true
    },
    modelo: {
        type: String,
        required: true
    },
});

ZapatoSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;

});

module.exports = model('Zapato', ZapatoSchema);