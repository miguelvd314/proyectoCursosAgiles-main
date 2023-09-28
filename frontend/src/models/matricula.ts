export class Matricula {
    _id: String;
    codigo: string;
    idAlumno: string;
    idCurso: string;
    idProfesor: string;

    constructor(_id:string, codigo:string, idAlumno:string, idCurso:string, idProfesor:string){
        this._id = _id;
        this.codigo = codigo;
        this.idAlumno = idAlumno;
        this.idCurso = idCurso;
        this.idProfesor = idProfesor;
    }
}