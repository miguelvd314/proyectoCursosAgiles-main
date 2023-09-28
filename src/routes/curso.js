const express = require("express");
const cursoSchema = require("../models/curso");

const router = express.Router();

//crear usuario
router.post('/cursos', (req, res) =>{
    const  curso = cursoSchema(req.body);
    curso
    .save()
    .then((data) => res.json(data))
    .catch((error)=> res.json({message: error}));
});

//obtener todos los usuarios
router.get('/cursos', (req, res) =>{
    cursoSchema
    .find()
    .then((data) => res.json(data))
    .catch((error)=> res.json({message: error}));
});

//obtener un usuario en especifico
router.get('/cursos/:id', (req, res) =>{
    const { id } = req.params;
    cursoSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error)=> res.json({message: error}));
});

//Actualizar usuario
router.put('/cursos/:id', (req, res) =>{
    const { id } = req.params;
    const {codigo, nombre, fechaIni, fechaFin, dia, hora} = req.body;
    cursoSchema
    .updateOne({ _id: id},{ $set: {codigo, nombre, fechaIni, fechaFin, dia, hora}})
    .then((data) => res.json(data))
    .catch((error)=> res.json({message: error}));
});

//Eliminar usuario
router.delete('/cursos/:id', (req, res) =>{
    const { id } = req.params;
    cursoSchema
    .remove({ _id: id})
    .then((data) => res.json(data))
    .catch((error)=> res.json({message: error}));
});

module.exports = router;