
import appSettings from '../../presentation/rest_api/app-settings.json';

var authentication = {
    issuer: appSettings.authentication.issuer,
    audience: appSettings.authentication.audience,
    securityKey: appSettings.authentication.securityKey
};

var connectionString = {
    msSql: appSettings.connectionString.msSql,
    mongo: appSettings.connectionString.mongo
};

var Server = {
    domain: appSettings.serverSetting.domain,
    port: appSettings.serverSetting.port
};

export default { authentication, connectionString, Server }