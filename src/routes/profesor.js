const express = require("express");
const profesorSchema = require("../models/profesor");

const router = express.Router();

//crear usuario
router.post('/profesores', (req, res) =>{
    const  profesor = profesorSchema(req.body);
    profesor
    .save()
    .then((data) => res.json(data))
    .catch((error)=> res.json({message: error}));
});

//obtener todos los usuarios
router.get('/profesores', (req, res) =>{
    profesorSchema
    .find()
    .then((data) => res.json(data))
    .catch((error)=> res.json({message: error}));
});

//obtener un usuario en especifico
router.get('/profesores/:id', (req, res) =>{
    const { id } = req.params;
    profesorSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error)=> res.json({message: error}));
});

//Actualizar usuario
router.put('/profesores/:id', (req, res) =>{
    const { id } = req.params;
    const {codigo, nombre, apellido, correo, edad, gradoEstudios} = req.body;
    profesorSchema
    .updateOne({ _id: id},{ $set: {codigo, nombre, apellido, correo, edad, gradoEstudios}})
    .then((data) => res.json(data))
    .catch((error)=> res.json({message: error}));
});

//Eliminar usuario
router.delete('/profesores/:id', (req, res) =>{
    const { id } = req.params;
    profesorSchema
    .remove({ _id: id})
    .then((data) => res.json(data))
    .catch((error)=> res.json({message: error}));
});

module.exports = router;