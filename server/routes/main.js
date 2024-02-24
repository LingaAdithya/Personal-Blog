const express = require('express');
const router = express.Router();


//ROUTES
router.get('', (req, res) => {
 const locals = {
    title: "Linga's Blog",
    description: "This Blog was personally created with NodeJS, Express & MongoDb."
 }


    res.render('index', { locals });
});

router.get('/about', (req, res) => {
    res.render('about');
});


module.exports = router;