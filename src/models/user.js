const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    codigo: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    edad: {
        type: String,
        require: true
    },
    gradoEstudios: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);