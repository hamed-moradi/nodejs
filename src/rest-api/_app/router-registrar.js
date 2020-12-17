
import homeRouter from "../routes/home-router.js";
import accountRouter from "../routes/account-router.js";
import customerRouter from "../routes/customer-router.js";

function load(app) {
    app.use('/', homeRouter);
    app.use('/account', accountRouter);
    app.use('/customer', customerRouter);
}

export default { load };