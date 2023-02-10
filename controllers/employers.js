const express = require('express');
const router = express.Router();

const fs = require('fs');

/** Get employers index(the module home page)  */
router.get('/', (req, res) => {
    //get data from json file
    fs.readFile('./data/employers.json', 'utf8', (err, employers) => {
        if (err) {
            console.log(err)
        } else {
            res.render('employers/index', {
                title: 'Employers',
                employers: employers
            });

        }
    });

})

module.exports = router;