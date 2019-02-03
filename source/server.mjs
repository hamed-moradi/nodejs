'use strict';

//#region modules
import express from 'express';
var app = express();
app.use(express.static('public'));
//app.use(express.json());
//app.use(express.urlencoded({ extended=false }));

import mongoose from 'mongoose';
const mongoConnection = 'mongodb://192.168.188.128:27017/express-api';
//'mongodb://username:password@host:port/database?options'
mongoose.connect(mongoConnection, {useNewUrlParser: true});

// import multer from 'multer';
// app.use(multer({ dest: '/tmp/' }));

import bodyParser from 'body-parser';
app.use(bodyParser.json());

import cookieParser from 'cookie-parser';
app.use(cookieParser());

//import httpError from 'http-errors';
//app.use(httpError());

// import morgan from 'morgan';
// app.use(morgan('dev'));
//#endregion

//#region routes
import homeRouter from './presentation/routes/home';
app.use('/home', homeRouter);

import userRouter from './presentation/routes/user';
app.use('/user', userRouter);
//#endregion

//#region error handler
// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//     next(httpError(404));
// });

// error handler
// app.use(function (err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};

//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
// });
//#endregion

app.listen(1366);