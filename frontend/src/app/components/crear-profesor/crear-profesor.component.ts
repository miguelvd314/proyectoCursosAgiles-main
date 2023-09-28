import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProfesorService } from 'src/app/services/profesor.service';
import { Profesor } from 'src/models/profesor';

@Component({
  selector: 'app-crear-profesor',
  templateUrl: './crear-profesor.component.html',
  styleUrls: ['./crear-profesor.component.css']
})
export class CrearProfesorComponent implements OnInit {
  profesorForm: FormGroup

  titulo = 'Añadir profesor';
  id: string | null;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _profesorService: ProfesorService,
              private aRouter: ActivatedRoute) { 
    this.profesorForm = this.fb.group({
      codigo: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', Validators.required],
      edad: ['', Validators.required],
      gradoEstudios: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarProfesor() {

    const PROFESOR: Profesor = {
      _id: this.profesorForm.get('_id')?.value,
      codigo: this.profesorForm.get('codigo')?.value,
      nombre: this.profesorForm.get('nombre')?.value,
      apellido: this.profesorForm.get('apellido')?.value,
      correo: this.profesorForm.get('correo')?.value,
      edad: this.profesorForm.get('edad')?.value,
      gradoEstudios: this.profesorForm.get('gradoEstudios')?.value,
    }

    if(this.id !== null){
      this._profesorService.editarProfesor(this.id, PROFESOR).subscribe(data => {
        this.toastr.success('Se edito con exito!', 'Alumno Modificado!');
        this.router.navigate(['/profesor']);
      }, error => {
        console.log(error);
        this.profesorForm.reset();
      })
    }else{
      console.log(PROFESOR);
      this._profesorService.guardarProfesor(PROFESOR).subscribe(data => {
      this.toastr.success('Se registro con exito!', 'Alumno Registrado!');
      this.router.navigate(['/profesor']);
      }, error => {
      console.log(error);
      this.profesorForm.reset();
    })
    }

    

  
  }

  esEditar() {

    if(this.id !== null) {
      this.titulo = 'Editar profesor';
      this._profesorService.obtenerProfesor(this.id).subscribe(data => {
        this.profesorForm.setValue({
          codigo: data.codigo,
          nombre: data.nombre,
          apellido: data.apellido,
          correo: data.correo,
          edad: data.edad,
          gradoEstudios: data.gradoEstudios,
        })
      })
    }
  }
}