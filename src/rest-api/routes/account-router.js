
import express from 'express';
let router = express.Router({ caseSensitive: false });

import resHelper from '../helpers/response.js';
import accountService from '../../application/services/account-service.js';
import jwtHelper from "../helpers/jwt-helper.js";
import accountViewModel from '../../model/view-models/account-viewModel.js';

//sign-in
router.post("/signin", async (req, res) => {
    var signin = req.body;
    if (signin.username != undefined && signin.username != null && signin.username != "" &&
        signin.password != undefined && signin.password != null && signin.password != "") {

        try {
            return res.send(jwtHelper.generate(signin));
        }
        catch (err) {
            res.status = 500;
            res.send(err);
        }
    }
    res.status = 400;
    return res.send()
});

//get by id
router.get('/:id', async (req, res) => {
    var result = await accountService.getById(req.params.id);
    var response = resHelper.ok({ data: new accountViewModel(result.Id, result.Name) });
    return res.send(response);
});

//get all
router.get('/', async (req, res) => {
    var result = resHelper.ok({ data: await accountService.getAll() });
    res.send(result);
});

//update
router.put('/update/:id', async (req, res) => {
    var result = resHelper.ok({ message: `the item with id = ${req.params.id} has been updated` });
    res.send(result);
});

//insert
router.post('/insert', async (req, res) => {
    //needs await
    if (req.body.name == null || req.body.name == '' || req.body.name == undefined) {
        res.send(resHelper.badRequest({ message: 'the name is required!' }));
    }
    res.send(resHelper.ok({ data: req.body.name }));
});

export default router;