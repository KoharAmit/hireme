const express = require('express');
const router = express.Router();
const City = require('../models/city.js');

router.get('/create', (req, res) => {
    res.render('cities/create');
});
router.post('/create', (req, res) => {
    City.create(req.body, (err, newDocument) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    });
});

module.exports = router;