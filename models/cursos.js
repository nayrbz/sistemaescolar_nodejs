module.exports = function (app) {
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var curso = Schema({
        codigo: { type: Number, required: true },
        descricao: { type: String, required: true },
        cargahoraria: { type: Number, required: true },
        categoria: { type: String, required: true },
    });
    return mongoose.model('cursos', curso);
}; 