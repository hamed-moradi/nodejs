export default class response {
    constructor(data, totalPages, statusCode, message, version) {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.totalPages = totalPages;
        this.version = version;
    }
}