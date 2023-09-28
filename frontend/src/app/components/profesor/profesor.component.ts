import { Component, OnInit } from '@angular/core';
import { ProfesorService } from 'src/app/services/profesor.service';
import { Profesor } from 'src/models/profesor';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements OnInit{

  listProfesores: Profesor[] = [];

  constructor(private _profesorService: ProfesorService){}

  ngOnInit(): void {
    this.obtenerProfesores();
  }

  obtenerProfesores(){
    this._profesorService.getProfesores().subscribe(data => {
      console.log(data);
      this.listProfesores = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarProfesor(id: any){
    this._profesorService.eliminarProfesor(id).subscribe(data => {
      this.obtenerProfesores();
    }, error => {
      console.log(error);
    })
  }

}
