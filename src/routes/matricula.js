const express = require("express");
const matriculaSchema = require("../models/matricula");

const router = express.Router();

//crear usuario
router.post('/matriculas', (req, res) =>{
    const  matricula = matriculaSchema(req.body);
    matricula
    .save()
    .then((data) => res.json(data))
    .catch((error)=> res.json({message: error}));
});

//obtener todos los usuarios
router.get('/matriculas', (req, res) =>{
    matriculaSchema
    .find()
    .then((data) => res.json(data))
    .catch((error)=> res.json({message: error}));
});

//obtener un usuario en especifico
router.get('/matriculas/:id', (req, res) =>{
    const { id } = req.params;
    matriculaSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error)=> res.json({message: error}));
});

//Actualizar usuario
router.put('/matriculas/:id', (req, res) =>{
    const { id } = req.params;
    const {codigo, idAlumno, idCurso, idProfesor} = req.body;
    matriculaSchema
    .updateOne({ _id: id},{ $set: {codigo, idAlumno, idCurso, idProfesor}})
    .then((data) => res.json(data))
    .catch((error)=> res.json({message: error}));
});

//Eliminar usuario
router.delete('/matriculas/:id', (req, res) =>{
    const { id } = req.params;
    matriculaSchema
    .remove({ _id: id})
    .then((data) => res.json(data))
    .catch((error)=> res.json({message: error}));
});

module.exports = router;