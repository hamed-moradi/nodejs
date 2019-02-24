
let express = require('express');
let router = express.Router({ caseSensitive: false });

let customerApp = require('../../domain/applications/customer');
let resHelper = require('../helpers/response');

router.get('/:id', async (req, res) => {
    var result = await customerApp.getById(req.params.id);
    res.send(resHelper.ok({ data: result }));
});

router.get('/', async (req, res) => {
    var result = await customerApp.getAll();
    res.send(resHelper.ok({ data: result }));
});

module.exports = router;