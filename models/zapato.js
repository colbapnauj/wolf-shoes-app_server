const  { Schema, model } = require('mongoose');

const ZapatoSchema = Schema({
    nombre_modelo: {
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