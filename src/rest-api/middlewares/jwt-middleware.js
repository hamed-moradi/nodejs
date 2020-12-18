
import jwt from 'express-jwt';
import appSetting from '../../../app-settings.js';

let load = (app) => {
    app.use(jwt({
        issuer: appSetting.authentication.issuer,
        audience: appSetting.authentication.audience,
        secret: appSetting.authentication.securityKey,
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