import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AlumnoService } from 'src/app/services/alumno.service';
import { Alumno } from 'src/models/alumno';

@Component({
  selector: 'app-crear-alumno',
  templateUrl: './crear-alumno.component.html',
  styleUrls: ['./crear-alumno.component.css']
})
export class CrearAlumnoComponent implements OnInit {
  alumnoForm: FormGroup

  titulo = 'Añadir alumno';
  id: string | null;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _alumnoService: AlumnoService,
              private aRouter: ActivatedRoute) { 
    this.alumnoForm = this.fb.group({
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

  agregarAlumno() {

    const ALUMNO: Alumno = {
      _id: this.alumnoForm.get('_id')?.value,
      codigo: this.alumnoForm.get('codigo')?.value,
      nombre: this.alumnoForm.get('nombre')?.value,
      apellido: this.alumnoForm.get('apellido')?.value,
      correo: this.alumnoForm.get('correo')?.value,
      edad: this.alumnoForm.get('edad')?.value,
      gradoEstudios: this.alumnoForm.get('gradoEstudios')?.value,
    }

    if(this.id !== null){
      this._alumnoService.editarAlumno(this.id, ALUMNO).subscribe(data => {
        this.toastr.success('Se edito con exito!', 'Alumno Modificado!');
        this.router.navigate(['/alumno']);
      }, error => {
        console.log(error);
        this.alumnoForm.reset();
      })
    }else{
      console.log(ALUMNO);
      this._alumnoService.guardarAlumno(ALUMNO).subscribe(data => {
      this.toastr.success('Se registro con exito!', 'Alumno Registrado!');
      this.router.navigate(['/alumno']);
      }, error => {
      console.log(error);
      this.alumnoForm.reset();
    })
    }

    

  
  }

  esEditar() {

    if(this.id !== null) {
      this.titulo = 'Editar alumno';
      this._alumnoService.obtenerAlumno(this.id).subscribe(data => {
        this.alumnoForm.setValue({
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
