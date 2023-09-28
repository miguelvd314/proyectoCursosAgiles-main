const express = require('express');
const mongoose = require('mongoose');
require ("dotenv").config();
const userRoutes = require("./routes/user");
const profesorRoutes = require("./routes/profesor");
const cursoRoutes = require("./routes/curso");
const matriculaRoutes = require("./routes/matricula");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(cors())
app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', profesorRoutes);
app.use('/api', cursoRoutes);
app.use('/api', matriculaRoutes);

//routers rutas
app.get("/", (req, res)=>{
    res.send("Bienvenidos a la API");
});

//mongodb conection
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log("Conectado a mongodb atlas"))
.catch((error)=> console.error(error));


app.listen(port, () => console.log('servidor esta funcionando', port));
