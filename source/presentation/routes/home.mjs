//#region definations
import express from 'express';
var router = express.Router({ caseSensitive: false });

import resHelper from '../helpers/response';
//#endregion

router.get('/', function (req, res) {
    res.send(new resHelper.ok({ message: 'Web API is runnig ...' }));
});

export default router;