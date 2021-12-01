var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CategorieSchema = new Schema({
  nome : String,
  description : String,
  id_Boutique : String
});

module.exports = mongoose.model('Categorie', CategorieSchema);
