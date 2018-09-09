module.exports = function (app) {
    var mongoose = require('mongoose');
    var Usuario = app.models.usuarios;
    
    var UsuariosController = {
        cadastroUsuario: function (request, response) {
            var usuario = request.session.usuario,
                params = { usuario: usuario };
            response.render('usuarios/cadUsuario', params);
        },
        novoUsuario: function (request, response) {
            var nome = request.body.usuario.nome;
            var senha = request.body.usuario.senha;
            var confirma = request.body.usuario.confirma;

            if ((senha != confirma) || nome.trim().length == 0) {
                var params = { message: "Ocorreu um erro ao incluir seu usuário." };
                response.render('/error', params);
            }
            else {
                var usuario = request.body.usuario;
                Usuario.create(usuario, function (erro, usuario) {
                    if (erro) {
                        response.redirect('/');
                    }
                    else {
                        response.redirect('/menu');
                    }
                });
            }
        },
    };
    return UsuariosController;
};