const mongoose = require('mongoose');

const matriculaSchema = mongoose.Schema({
    codigo: {
        type: String,
        required: true
    },
    idAlumno: {
        type: String,
        required: true
    },
    idCurso: {
        type: String,
        required: true
    },
    idProfesor: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Matricula', matriculaSchema);