'use strict';

let express = require('express');
var app = express();
app.use(express.static('public'));
//app.use(express.json());
//app.use(express.urlencoded({ extended=false }));

// import multer from 'multer';
// app.use(multer({ dest: '/tmp/' }));

let bodyParser = require('body-parser');
app.use(bodyParser.json());

// import cookieParser from 'cookie-parser';
// app.use(cookieParser());

// import morgan from 'morgan';
// app.use(morgan('dev'));

let homeRouter = require('./presentation/routes/home');
app.use('/', homeRouter);

let userRouter = require('./presentation/routes/user');
app.use('/user', userRouter);

let customerRouter = require('./presentation/routes/customer');
app.use('/customer', customerRouter);

let responseHelper = require('./presentation/helpers/response')
//catch 404 and forward to error handler
app.use((req, res, next) => {
    //next(responseHelper.notFound());
});

// error handler
// app.use(function (err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};

//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
// });

app.listen(1366);