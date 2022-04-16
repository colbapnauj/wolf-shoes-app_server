const  { Schema, model } = require('mongoose');

const ColorSchema = Schema({
    name_color: {
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