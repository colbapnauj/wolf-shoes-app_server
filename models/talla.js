const  { Schema, model } = require('mongoose');

const TallaSchema = Schema({
    cod_ta: {
        type: String,
        required: true
    },
    talla: {
        type: int,
        required: true
    },
});

ClienteSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;

});

module.exports = model('Talla', TallaSchema);