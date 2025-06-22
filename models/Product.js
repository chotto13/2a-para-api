const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  name:   { type: String, required: true },
  brand:  String,
  price:  Number,
  image:  String
});

module.exports = model('Product', productSchema);
