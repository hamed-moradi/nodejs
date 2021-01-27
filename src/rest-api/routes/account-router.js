
import express from 'express';
let router = express.Router({ caseSensitive: false });

import { check, validationResult } from 'express-validator';

import accountService from '../../application/services/account-service.js';
import jwtHelper from "../helpers/jwt-helper.js";

// sign-in
router.post("/signin",
    [
        check('username').isEmpty(),
        check('password').isEmpty(),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        var signin = req.body;
        if (signin.username != undefined && signin.username != null && signin.username != '' &&
            signin.password != undefined && signin.password != null && signin.password != '') {

            try {
                return res.send(jwtHelper.generate(signin));
            }
            catch (err) {
                res.status(500);
                res.send(err);
            }
        }
        res.status(400);
        return res.send()
    });

// sign-up
router.post("/signup",
    [
        check('username').isEmpty(),
        check('username').isLength({ min: 6 }),
        check('password').isEmpty(),
        check('password').isLength({ min: 6 }),
        //check('confirmPassword').isSurrogatePair(),
    ],
    async (req, res) => {
        var signup = req.body;
        if (signup.username != undefined && signup.username != null && signup.username != '' &&
            signup.password != undefined && signup.password != null && signup.password != '' &&
            signup.confirmPassword != undefined && signup.confirmPassword != null && signup.confirmPassword != '') {

            try {
                var result = await accountService.insert(signup);
            }
            catch (err) {
                res.status(500);
                res.send(err);
            }
        }
        res.status(400);
        return res.send()
    });

//get by id
router.get('/:id', async (req, res) => {
    var result = await accountService.getById(req.params.id);
    return res.send(result);
});

//get all
router.get('/', async (req, res) => {
    var result = await accountService.getAll();
    res.send(result);
});

//update
router.put('/update/:id', async (req, res) => {
    var result = { message: `the item with id = ${req.params.id} has been updated` };
    res.send(result);
});

//insert
router.post('/insert', async (req, res) => {
    //needs await
    if (req.body.name == null || req.body.name == '' || req.body.name == undefined) {
        res.send({ message: 'the name is required!' });
    }
    res.send({ data: req.body.name });
});

export default router;