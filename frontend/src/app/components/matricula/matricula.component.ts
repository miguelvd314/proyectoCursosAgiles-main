import { Component, OnInit } from '@angular/core';
import { MatriculaService } from 'src/app/services/matricula.service';
import { Matricula } from 'src/models/matricula';

@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
  styleUrls: ['./matricula.component.css']
})
export class MatriculaComponent implements OnInit{

  listMatriculas: Matricula[] = [];

  constructor(private _matriculaService: MatriculaService){}

  ngOnInit(): void {
    this.obtenerMatricula();
  }

  obtenerMatricula(){
    this._matriculaService.getMatriculas().subscribe(data => {
      console.log(data);
      this.listMatriculas = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarMatricula(id: any){
    this._matriculaService.eliminarMatricula(id).subscribe(data => {
      this.obtenerMatricula();
    }, error => {
      console.log(error);
    })
  }

}
