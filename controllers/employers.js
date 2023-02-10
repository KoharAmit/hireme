const express = require('express');
const router = express.Router();

/** Get employers index(the module home page)  */
router.get('/', (req, res) => {
    res.render('employers/index', { title: 'Employers' });
})

module.exports = router;