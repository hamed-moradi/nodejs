
function load(app) {
    import homeRouter from './presentation/rest_api/routes/home-router.js';
    app.use('/', homeRouter);

    import userRouter from './presentation/rest_api/routes/user-router.js';
    app.use('/user', userRouter);

    import customerRouter from './presentation/rest_api/routes/customer-router.js';
    app.use('/customer', customerRouter);
}

export default { load };