//#region definations
import express from 'express';
let router = express.Router({ caseSensitive: false });

import customerApp from '../../domain/applications/customer';
import resHelper from '../helpers/response';
//#endregion

router.get('/:id', async (req, res) => {
    var result = await customerApp.getById(req.params.id);
    res.send(resHelper.ok({ data: result }));
});

router.get('/', async (req, res) => {
    var result = await customerApp.getAll();
    res.send(resHelper.ok({ data: result }));
});

export default router;