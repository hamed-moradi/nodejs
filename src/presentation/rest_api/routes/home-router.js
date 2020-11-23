
import express from 'express';
let router = express.Router({ caseSensitive: false });

import resHelper from '../helpers/response.js';

router.get('/', function (req, res) {
    //res.send(new resHelper.ok({ message: 'Web API is runnig ...' }));
    res.send({ version: "1" });
});

export default router;