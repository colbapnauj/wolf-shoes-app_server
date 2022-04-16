const  { Schema, model } = require('mongoose');

const TallaSchema = Schema({
    nro_talla: {
        type: String,
        required: true
    },
});

TallaSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;

});

module.exports = model('Talla', TallaSchema);