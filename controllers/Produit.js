function createProduit(req, res) {
    let Produit = require('../models/Produit');
    let newProduit = Produit ({
        title: req.body.title,
        description : req.body.description,
        prix : req.body.prix,
        id_categorie : req.body.id_categorie
    });
  
    newProduit.save()
    .then((savedProduit) => {

        //send back the created Produit
        res.json(savedProduit);
            
    }, (err) => {
        res.status(400).json(err)
    });

}

function readProduits(req, res) {

    let Produit = require("../models/Produit");

    Produit.find({
        id_categorie:req.params.id
    })
    .then((Produits) => {
        res.status(200).json(Produits);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function readProduit(req, res) {

    let Produit = require("../models/Produit");

    Produit.findById({_id : req.params.id})
    .then((Produit) => {
        res.status(200).json(Produit);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function updateProduit(req, res) {

    let Produit = require("../models/Produit");

    Produit.findByIdAndUpdate({_id: req.params.id}, 
        {title : req.body.title, 
        description : req.body.description}, 
        {new : true})
    .then((updatedProduit) => {
        res.status(200).json(updatedProduit);
    }, (err) => {
        res.status(500).json(err);
    });
}

function deleteProduit(req, res) {

    let Produit = require("../models/Produit");

    Produit.findOneAndRemove({_id : req.params.id})
    .then((deletedProduit) => {
        res.status(200).json(deletedProduit);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function done(req, res) {

    let Produit = require("../models/Produit");

    Produit.findByIdAndUpdate({_id: req.params.id}, 
        {done : true}, 
        {new : true})
    .then((updatedProduit) => {
        res.status(200).json(updatedProduit);
    }, (err) => {
        res.status(500).json(err);
    });

}

function undone(req, res) {

    let Produit = require("../models/Produit");

    Produit.findByIdAndUpdate({_id: req.params.id}, 
        {done : false}, 
        {new : true})
    .then((updatedProduit) => {
        res.status(200).json(updatedProduit);
    }, (err) => {
        res.status(500).json(err);
    });

}

module.exports.create = createProduit;
module.exports.reads = readProduits;
module.exports.read = readProduit;
module.exports.delete = deleteProduit;
module.exports.update = updateProduit;
module.exports.done = done;
module.exports.undone = undone;

