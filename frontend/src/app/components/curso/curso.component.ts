import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/services/curso.service';
import { Curso } from 'src/models/curso';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit{

  listCursos: Curso[] = [];

  constructor(private _cursoService: CursoService){}

  ngOnInit(): void {
    this.obtenerCursos();
  }

  obtenerCursos(){
    this._cursoService.getCursos().subscribe(data => {
      console.log(data);
      this.listCursos = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarCurso(id: any){
    this._cursoService.eliminarCurso(id).subscribe(data => {
      this.obtenerCursos();
    }, error => {
      console.log(error);
    })
  }

}
