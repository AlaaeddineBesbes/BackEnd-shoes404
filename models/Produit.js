var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProduitSchema = new Schema({
  nom : String,
  description : String,
  prix : Number,
  id_Categorie : String
});

module.exports = mongoose.model('Produit', ProduitSchema);

