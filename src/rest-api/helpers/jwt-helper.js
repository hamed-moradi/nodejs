
import jwt from "jsonwebtoken";
import config from "../../infrastructure/config.js";

let generate = (signinModel) => {
    // algorithm: RsaPssParams, EcdsaParams, AesCmacParams
    const accessToken = jwt.sign(signinModel, config.authentication.securityKey)
    return "Bearer " + accessToken;
}

let extract = (authHeader) => {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, config.authentication.securityKey, (err, user) => {
        if (err) {
            return { status: 500, message: err };
        }
        return { status: 200, data: user };
    });
}

export default { generate, extract };