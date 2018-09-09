module.exports = function (app) {
    var valida = require('../middlewares/valida')

    var cursos = app.controllers.cursos;
    app.get('/menu', valida, cursos.menu);
    app.get('/cadCurso', valida,cursos.cadastroCurso);
    app.post('/novoCurso', valida,cursos.novoCurso);
    app.get('/listaCursos', valida, cursos.listaCursos);
}