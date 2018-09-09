module.exports = function (app) {
    var usuarios = app.controllers.usuarios;
    app.get('/cadUsuario', usuarios.cadastroUsuario);
    app.post('/novoUsuario', usuarios.novoUsuario);
}