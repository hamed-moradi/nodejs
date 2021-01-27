
import jwt from 'express-jwt';
import config from '../../infrastructure/config.js';

let load = (app) => {
    app.use(jwt({
        issuer: config.authentication.issuer,
        audience: config.authentication.audience,
        secret: config.authentication.securityKey,
        credentialsRequired: false,
        algorithms: ['RsaPssParams', 'EcdsaParams', 'AesCmacParams'],
        getToken: function fromHeaderOrQuerystring(req) {
            if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
                return req.headers.authorization.split(' ')[1];
            } else if (req.query && req.query.token) {
                return req.query.token;
            }
            return null;
        }
    }));
    //.unless({
    //    path: [
    //        '/account/signin',
    //        '/account/signup',
    //        '/account/signout',
    //        '/account/forgotpassword'],
    //});
}

export default { load };