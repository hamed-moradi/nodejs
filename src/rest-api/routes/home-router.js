
import express from 'express';
let router = express.Router({ caseSensitive: false });

import mssqlContext from "../../domain/_app/mssql-context.js";
import resHelper from '../helpers/response.js';

router.get('/', async (req, res) => {
    //res.send(new resHelper.ok({ message: 'Web API is runnig ...' }));

    res.send({
        connected: mssqlContext.pool.connected,
        version: "1"
    });
});

export default router;