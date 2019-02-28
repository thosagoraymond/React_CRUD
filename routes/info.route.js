const Adverts = require('../models/info.model');
const router = require('express').Router();

//Creating a POST endpoint
router.post('/api/info', (req, res) => {
    console.log(req.statusCode)
    let new_info = new Adverts({
        username: req.body.username,
        surname: req.body.surname,
        email: req.body.email,
        phone: req.body.phone,
    });
console.log(new_info);
    new_info.save(err=>{
        if(err){
            console.log("Error is ",err)
        } res.json(
            { response: "Details added succesfully !"}
        )
    });
});

//creating a GET adverts endpoint to get/retrive all information from DB
router.get('/api/info', (req, res, next)=>{
    Adverts.find({}, function(err, foundInfo){
        if(err) return next(err);
        if (!foundInfo){
            return res.json({message:"No informatin was found were found"})
        }
        res.json(foundInfo);
    });
});

module.exports = router;