export class Curso {
    _id: String;
    codigo: string;
    nombre: string;
    fechaIni: string;
    fechaFin: string;
    dia: string;
    hora: string;

    constructor(_id:string, codigo:string, nombre:string, fechaIni:string, fechaFin:string, dia:string, hora:string){
        this._id = _id;
        this.codigo = codigo;
        this.nombre = nombre;
        this.fechaIni = fechaIni;
        this.fechaFin = fechaFin;
        this.dia = dia;
        this.hora = hora;
    }
}