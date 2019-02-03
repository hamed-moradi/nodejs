import responseModel from '../models/general';

function ok({ data = null, totalPages = 0, statusCode = 200, message = 'succeed' }) {
    return new responseModel(data, totalPages, statusCode, message, 1);
}
function badRequest({ data = null, totalPages = 0, statusCode = 400, message = 'bad request' }) {
    return new responseModel(data, totalPages, statusCode, message, 1);
}
function internalServerError({ data = null, totalPages = 0, statusCode = 500, message = 'internal server error' }) {
    return new responseModel(data, totalPages, statusCode, message, 1);
}

export default { ok, badRequest, internalServerError }