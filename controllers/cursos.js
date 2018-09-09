module.exports = function (app) {
    var mongoose = require('mongoose');
    var Curso = app.models.cursos;
    
    var CursosController = {
        menu: function (request, response) {
            var usuario = request.session.usuario,
                params = { usuario: usuario };
            response.render('menu', params);
        },
        cadastroCurso: function (request, response) {
            var usuario = request.session.usuario,
                params = { usuario: usuario };
            response.render('cursos/cadCurso', params);
        },
        listaCursos: function (request, response) {
            Curso.find(function (erro, cursos) {
                if (erro) {
                    var params = { message: "Ocorreu um erro ao buscar cursos." };
                    response.render('/error', params);
                }
                else {
                    var usuario = request.session.usuario,
                        params = { usuario: usuario, cursos: cursos };
                    response.render('cursos/listaCursos', params);
                }
            });
        },
        novoCurso: function (request, response) {
            var curso = request.body.curso;
            Curso.create(curso, function (erro, curso) {
                if (erro) {
                    var params = { message: "Ocorreu um erro ao incluir seu curso." };
                    response.render('/error', params);
                } else {
                    CursosController.listaCursos(request, response);
                }
            });
        }
    };
    return CursosController;
};