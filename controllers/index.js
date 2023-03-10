const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    res.render('index', {
        title: 'Hire me',
        user: req.user
    });
});

/* GET /about page */
router.get('/about', (req, res) => {
    //get the current dateand pass it to about view
    let date = new Date();
    res.render('about', {
        date: date,
        title: 'About page',
        user: req.user
    });

});


module.exports = router;