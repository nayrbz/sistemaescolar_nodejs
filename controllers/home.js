module.exports = function (app) {
    var mongoose = require('mongoose');
    var Usuario = mongoose.model('usuarios');

    var HomeController = {
        index: function (req, res) {
            res.render('home/index');
        },
        login: function (req, res) {
            var nome = req.body.usuario.nome;
            var senha = req.body.usuario.senha;

            var query = {'nome' :nome, 'senha':senha};
            Usuario.findOne(query).select('nome senha')
                .exec(function (erro, usuario) {
                    if (erro) {
                        var params = { message: "Desculpe, não foi possível realizar seu login, os dados não batem!" };
                        response.render('/error', params);
                    }
                    else {
                        req.session.usuario = usuario;
                        res.redirect('/menu');
                    }
                });
        },
        logout: function (req, res) {
            req.session.destroy();
            res.redirect('/');
        },
    };
    return HomeController;
}; 