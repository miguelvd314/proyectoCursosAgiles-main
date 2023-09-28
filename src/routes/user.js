const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();

//crear usuario
router.post('/users', (req, res) =>{
    const  user = userSchema(req.body);
    user
    .save()
    .then((data) => res.json(data))
    .catch((error)=> res.json({message: error}));
});

//obtener todos los usuarios
router.get('/users', (req, res) =>{
    userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error)=> res.json({message: error}));
});

//obtener un usuario en especifico
router.get('/users/:id', (req, res) =>{
    const { id } = req.params;
    userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error)=> res.json({message: error}));
});

//Actualizar usuario
router.put('/users/:id', (req, res) =>{
    const { id } = req.params;
    const {codigo, nombre, apellido, correo, edad, gradoEstudios} = req.body;
    userSchema
    .updateOne({ _id: id},{ $set: {codigo, nombre, apellido, correo, edad, gradoEstudios}})
    .then((data) => res.json(data))
    .catch((error)=> res.json({message: error}));
});

//Eliminar usuario
router.delete('/users/:id', (req, res) =>{
    const { id } = req.params;
    userSchema
    .remove({ _id: id})
    .then((data) => res.json(data))
    .catch((error)=> res.json({message: error}));
});

module.exports = router;