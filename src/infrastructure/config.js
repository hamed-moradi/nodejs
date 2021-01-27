import yaml from 'js-yaml';
import fs from 'fs';

const path = './config.yaml';
const file = fs.readFileSync(path, 'utf8');
const config = yaml.load(file);

const authentication = config.authentication;

config.connectionString.mssql.get = function () {
    return `Data Source=${config.connectionString.mssql.server};Initial Catalog=${config.connectionString.mssql.database};
            User ID=${config.connectionString.mssql.user};Password=${config.connectionString.mssql.password};MultipleActiveResultSets=true;`;
}
const connectionString = config.connectionString;

const server = config.server;

export default {
    authentication, connectionString, server
};