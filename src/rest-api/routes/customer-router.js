
import express from 'express';
let router = express.Router({ caseSensitive: false });

import customerApp from '../../application/services/customer-service.js';

router.get('/:id', async (req, res) => {
    var result = await customerApp.getById(req.params.id);
    res.send({ data: result });
});

router.get('/', async (req, res) => {
    var result = await customerApp.getAll();
    res.send({ data: result });
});

export default router;