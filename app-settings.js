
var authentication = {
    issuer: 'http://issuer',
    audience: 'http://myapi/protected',
    securityKey: "securityKey"
};

var connectionString = {
    msSql: {
        server: "127.0.0.1",
        user: "sa",
        password: "123",
        database: "nodejs"
    },
    mongo: "mongodb://localhost:27017/db"
};

var server = {
    domain: "",
    port: ""
};

export default { authentication, connectionString, server };