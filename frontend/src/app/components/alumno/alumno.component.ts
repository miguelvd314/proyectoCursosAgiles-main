import { Component, OnInit } from '@angular/core';
import { AlumnoService } from 'src/app/services/alumno.service';
import { Alumno } from 'src/models/alumno';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit{

  listAlumnos: Alumno[] = [];

  constructor(private _alumnoService: AlumnoService){}

  ngOnInit(): void {
    this.obtenerAlumnos();
  }

  obtenerAlumnos(){
    this._alumnoService.getAlumnos().subscribe(data => {
      console.log(data);
      this.listAlumnos = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarAlumno(id: any){
    this._alumnoService.eliminarAlumno(id).subscribe(data => {
      this.obtenerAlumnos();
    }, error => {
      console.log(error);
    })
  }

}
