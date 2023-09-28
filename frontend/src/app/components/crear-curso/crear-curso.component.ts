import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CursoService } from 'src/app/services/curso.service';
import { Curso } from 'src/models/curso';

@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.css']
})
export class CrearCursoComponent implements OnInit {
  cursoForm: FormGroup

  titulo = 'Añadir curso';
  id: string | null;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _cursoService: CursoService,
              private aRouter: ActivatedRoute) { 
    this.cursoForm = this.fb.group({
      codigo: ['', Validators.required],
      nombre: ['', Validators.required],
      fechaIni: ['', Validators.required],
      fechaFin: ['', Validators.required],
      dia: ['', Validators.required],
      hora: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarCurso() {

    const CURSO: Curso = {
      _id: this.cursoForm.get('_id')?.value,
      codigo: this.cursoForm.get('codigo')?.value,
      nombre: this.cursoForm.get('nombre')?.value,
      fechaIni: this.cursoForm.get('fechaIni')?.value,
      fechaFin: this.cursoForm.get('fechaFin')?.value,
      dia: this.cursoForm.get('dia')?.value,
      hora: this.cursoForm.get('hora')?.value,
    }

    if(this.id !== null){
      this._cursoService.editarCurso(this.id, CURSO).subscribe(data => {
        this.toastr.success('Se edito con exito!', 'Alumno Modificado!');
        this.router.navigate(['/curso']);
      }, error => {
        console.log(error);
        this.cursoForm.reset();
      })
    }else{
      console.log(CURSO);
      this._cursoService.guardarCurso(CURSO).subscribe(data => {
      this.toastr.success('Se registro con exito!', 'Alumno Registrado!');
      this.router.navigate(['/curso']);
      }, error => {
      console.log(error);
      this.cursoForm.reset();
    })
    }

    

  
  }

  esEditar() {

    if(this.id !== null) {
      this.titulo = 'Editar curso';
      this._cursoService.obtenerCurso(this.id).subscribe(data => {
        this.cursoForm.setValue({
          codigo: data.codigo,
          nombre: data.nombre,
          fechaIni: data.fechaIni,
          fechaFin: data.fechaFin,
          dia: data.dia,
          hora: data.hora,
        })
      })
    }
  }
}
