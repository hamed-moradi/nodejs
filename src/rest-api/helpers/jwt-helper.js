
import jwt from "jsonwebtoken";
import appSetting from "../../../app-settings.js";

let generate = (signinModel) => {
    // algorithm: RsaPssParams, EcdsaParams, AesCmacParams
    const accessToken = jwt.sign(signinModel, appSetting.authentication.securityKey)
    return "Bearer " + accessToken;
}

export default { generate };