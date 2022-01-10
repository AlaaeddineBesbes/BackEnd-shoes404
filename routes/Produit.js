//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controller = require('../controllers/Produit');

//CREATE
router.post("/Produit/", (req, res) => {

    controller.create(req, res);

});

//READ
router.get("/Produits/:id", (req, res) => {
    
    controller.reads(req, res);

});

router.get("/Produit/:id", (req, res) => {
    
    controller.read(req, res);

});

//UPDATE
router.put("/Produit/:id", (req, res) => {
    
    controller.update(req, res);

});

//DELETE
router.delete("/Produit/:id", (req, res) => {
    
    controller.delete(req, res);

});

module.exports = router;

