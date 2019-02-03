import express from 'express';
var router = express.Router({ caseSensitive: false });

router.get('/', function (req, res) {
    res.json(true);
    //res.send('The web api is ready and running!');
});

export default router;