
let express = require('express');
let router = express.Router({ caseSensitive: false });
let resHelper = require('../helpers/response');

router.get('/', function (req, res) {
    res.send(new resHelper.ok({ message: 'Web API is runnig ...' }));
});

module.exports = router;