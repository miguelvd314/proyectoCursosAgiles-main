const mongoose = require('mongoose');

const cursoSchema = mongoose.Schema({
    codigo: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    fechaIni: {
        type: String,
        required: true
    },
    fechaFin: {
        type: String,
        required: true
    },
    dia: {
        type: String,
        require: true
    },
    hora: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Curso', cursoSchema);