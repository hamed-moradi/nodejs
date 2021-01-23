
var authentication = {
    issuer: 'http://issuer',
    audience: 'http://myapi/protected',
    securityKey: "securityKey"
};

var connectionString = {
    mssql: {
        server: "127.0.0.1",
        user: "sa",
        password: "123",
        database: "biavoo",
        get full() {
            return `Data Source=${this.server};Initial Catalog=${this.database};User ID=${this.user};Password=${this.password};MultipleActiveResultSets=true;`;
        },
    },
    mongo: "mongodb://localhost:27017/db"
};

var server = {
    domain: "",
    port: ""
};

export default { authentication, connectionString, server };