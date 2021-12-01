function createBoutique(req, res) {
    let Boutique = require('../models/Boutique');
    let newBoutique = Boutique ({
        nom: req.body.nom,
        description : req.body.description
    });
  
    newBoutique.save()
    .then((savedBoutique) => {

        //send back the created Boutique
        res.json(savedBoutique);
            
    }, (err) => {
        res.status(400).json(err)
    });

}

function readBoutiques(req, res) {

    let Boutique = require("../models/Boutique");

    Boutique.find({})
    .then((Boutiques) => {
        res.status(200).json(Boutiques);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function readBoutique(req, res) {

    let Boutique = require("../models/Boutique");

    Boutique.findById({_id : req.params.id})
    .then((Boutique) => {
        res.status(200).json(Boutique);
    }, (err) => {
        res.status(500).json(err);
    });
 }

 function getCategoriesByBoutique(req, res){
    let Categorie = require("../models/Categorie");

    console.log(req.params.id);
    Categorie.find(
        {
            Boutique : req.params.id
        }
    ).then((Categorie) => {
        res.status(200).json(Categorie);
    }, (err) => {
        res.status(500).json(err);
    });

}

function updateBoutique(req, res) {

    let Boutique = require("../models/Boutique");

    Boutique.findByIdAndUpdate({_id: req.params.id}, 
        {title : req.body.title, 
        description : req.body.description}, 
        {new : true})
    .then((updatedBoutique) => {
        res.status(200).json(updatedBoutique);
    }, (err) => {
        res.status(500).json(err);
    });
}

function deleteBoutique(req, res) {

    let Boutique = require("../models/Boutique");

    Boutique.findOneAndRemove({_id : req.params.id})
    .then((deletedBoutique) => {
        res.status(200).json(deletedBoutique);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function done(req, res) {

    let Boutique = require("../models/Boutique");

    Boutique.findByIdAndUpdate({_id: req.params.id}, 
        {done : true}, 
        {new : true})
    .then((updatedBoutique) => {
        res.status(200).json(updatedBoutique);
    }, (err) => {
        res.status(500).json(err);
    });

}

function undone(req, res) {

    let Boutique = require("../models/Boutique");

    Boutique.findByIdAndUpdate({_id: req.params.id}, 
        {done : false}, 
        {new : true})
    .then((updatedBoutique) => {
        res.status(200).json(updatedBoutique);
    }, (err) => {
        res.status(500).json(err);
    });

}

module.exports.create = createBoutique;
module.exports.reads = readBoutiques;
module.exports.read = readBoutique;
module.exports.delete = deleteBoutique;
module.exports.update = updateBoutique;
module.exports.done = done;
module.exports.undone = undone;

