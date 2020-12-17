
var response = function (data, statusCode, message) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
};

var response = function (data, totalPages, statusCode, message) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.totalPages = totalPages;
};

export default response;