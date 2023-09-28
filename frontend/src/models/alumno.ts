export class Alumno {
    _id: String;
    codigo: string;
    nombre: string;
    apellido: string;
    correo: string;
    edad: string;
    gradoEstudios: string;

    constructor(_id:string, codigo:string, nombre:string, apellido:string, correo:string, edad:string, gradoEstudios:string){
        this._id = _id;
        this.codigo = codigo;
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.edad = edad;
        this.gradoEstudios = gradoEstudios;
    }
}