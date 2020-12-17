'use strict';

import http from 'http';
import express from "express";

var app = express();
app.use(express.static('public'));
app.use(express.json());
//app.use(express.urlencoded({ extended=false }));

//import multer from 'multer';
//app.use(multer({ dest: '/tmp/' }));

import bodyParser from "body-parser";
app.use(bodyParser.json());

//import cookieParser from 'cookie-parser';
//app.use(cookieParser());

//import morgan from 'morgan';
//app.use(morgan('dev'));

// register routers
import routerRegistrar from './src/rest-api/_app/router-registrar.js';
routerRegistrar.load(app);

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
