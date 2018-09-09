exports.notFound = function (request, response, next) {
    response.status(404);
    response.render('error/erro404');
};
exports.serverError = function (error, request, response, next) {
    response.status(500);
    response.render('error/erroServidor', { error: error });
};