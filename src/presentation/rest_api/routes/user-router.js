
import express from 'express';
let router = express.Router({ caseSensitive: false });
import resHelper from '../helpers/response.js';
import userService from '../../../core/application/services/user.js';
import uservm from '../models/uservm.js';

//get by id
router.get('/:id', async (req, res) => {
    var result = await userService.getById(req.params.id);
    var response = resHelper.ok({ data: new uservm(result.Id, result.Name) });
    return res.send(response);
});

//get all
router.get('/', async (req, res) => {
    var result = resHelper.ok({ data: await userService.getAll() });
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
    if(req.body.name == null || req.body.name == '' || req.body.name == undefined) {
        res.send(resHelper.badRequest({ message: 'the name is required!' }));
    }
    res.send(resHelper.ok({ data: req.body.name }));
});

export default router;