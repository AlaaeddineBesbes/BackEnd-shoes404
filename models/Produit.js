var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProduitSchema = new Schema({
  title : String,
  description : String,
  prix : String,
  id_categorie : String
});

module.exports = mongoose.model('Produit', ProduitSchema);

