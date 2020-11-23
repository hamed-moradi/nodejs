
import express from 'express';
let router = express.Router({ caseSensitive: false });

import customerApp from '../../../core/application/services/customer.js';
import resHelper from '../helpers/response.js';

router.get('/:id', async (req, res) => {
    var result = await customerApp.getById(req.params.id);
    res.send(resHelper.ok({ data: result }));
});

router.get('/', async (req, res) => {
    var result = await customerApp.getAll();
    res.send(resHelper.ok({ data: result }));
});

export default router;