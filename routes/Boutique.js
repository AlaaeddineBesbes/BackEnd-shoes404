//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controller = require('../controllers/Boutique');

//CREATE
router.post("/Boutique/:id", (req, res) => {

    controller.create(req, res);

});

//READ
router.get("/Boutiques", (req, res) => {
    
    controller.reads(req, res);

});

router.get("/Boutique/:id", (req, res) => {
    
    controller.read(req, res);

});

//UPDATE
router.put("/Boutique/:id", (req, res) => {
    
    controller.update(req, res);

});

//DELETE
router.delete("/Boutique/:id", (req, res) => {
    
    controller.delete(req, res);

});

module.exports = router;

