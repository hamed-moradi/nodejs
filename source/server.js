'use strict';

import http from 'http';
import express from "express";

var app = express();
app.use(express.static('public'));
app.use(express.json());
//app.use(express.urlencoded({ extended=false }));

//import multer from 'multer';
//app.use(multer({ dest: '/tmp/' }));

//let bodyParser = require('body-parser');
//app.use(bodyParser.json());

import cookieParser from 'cookie-parser';
app.use(cookieParser());

import morgan from 'morgan';
app.use(morgan('dev'));

import homeRouter from './presentation/rest_api/routes/home-router.js';
app.use('/', homeRouter);

import userRouter from './presentation/rest_api/routes/user-router.js';
app.use('/user', userRouter);

import customerRouter from './presentation/rest_api/routes/customer-router.js';
app.use('/customer', customerRouter);

//import responseHelper from './presentation/rest_api/helpers/response';

//catch 404 and forward to error handler
app.use((req, res, next) => {
    //next(responseHelper.notFound());
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

var port = process.env.PORT || 1337;
app.listen(port);

//http.createServer(function(req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end('Hello World\n');
//}).listen(port);






