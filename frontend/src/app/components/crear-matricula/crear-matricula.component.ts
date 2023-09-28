import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatriculaService } from 'src/app/services/matricula.service';
import { AlumnoService } from 'src/app/services/alumno.service';
import { CursoService } from 'src/app/services/curso.service';
import { ProfesorService } from 'src/app/services/profesor.service';
import { Matricula } from 'src/models/matricula';
import { Alumno } from 'src/models/alumno';
import { Curso } from 'src/models/curso';
import { Profesor } from 'src/models/profesor';

@Component({
  selector: 'app-crear-matricula',
  templateUrl: './crear-matricula.component.html',
  styleUrls: ['./crear-matricula.component.css']
})
export class CrearMatriculaComponent implements OnInit {
  matriculaForm: FormGroup

  listAlumnos: Alumno[] = [];
  listCursos: Curso[] = [];
  listProfesores: Profesor[] = [];

  titulo = 'Añadir matricula';
  id: string | null;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _matriculaService: MatriculaService,
              private _alumnoService: AlumnoService,
              private _cursoService: CursoService,
              private _profesorService: ProfesorService,
              private aRouter: ActivatedRoute) { 
    this.matriculaForm = this.fb.group({
      codigo: ['', Validators.required],
      idAlumno: ['', Validators.required],
      idCurso: ['', Validators.required],
      idProfesor: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
    this.obtenerAlumnos();
    this.obtenerCursos();
    this.obtenerProfesores();
  }

  agregarMatricula() {

    const MATRICULA: Matricula = {
      _id: this.matriculaForm.get('_id')?.value,
      codigo: this.matriculaForm.get('codigo')?.value,
      idAlumno: this.matriculaForm.get('idAlumno')?.value,
      idCurso: this.matriculaForm.get('idCurso')?.value,
      idProfesor: this.matriculaForm.get('idProfesor')?.value,
    }

    if(this.id !== null){
      this._matriculaService.editarMatricula(this.id, MATRICULA).subscribe(data => {
        this.toastr.success('Se edito con exito!', 'Matricula Modificado!');
        this.router.navigate(['/matricula']);
      }, error => {
        console.log(error);
        this.matriculaForm.reset();
      })
    }else{
      console.log(MATRICULA);
      this._matriculaService.guardarMatricula(MATRICULA).subscribe(data => {
      this.toastr.success('Se registro con exito!', 'Matricula Registrada!');
      this.router.navigate(['/matricula']);
      }, error => {
      console.log(error);
      this.matriculaForm.reset();
    })
    }
  }

  esEditar() {

    if(this.id !== null) {
      this.titulo = 'Editar matricula';
      this._matriculaService.obtenerMatricula(this.id).subscribe(data => {
        this.matriculaForm.setValue({
          codigo: data.codigo,
          idAlumno: data.idAlumno,
          idCurso: data.idCurso,
          idProfesor: data.idProfesor,
        })
      })
    }
  }

  obtenerAlumnos(){
    this._alumnoService.getAlumnos().subscribe(data => {
      console.log(data);
      this.listAlumnos = data;
    }, error => {
      console.log(error);
    })
  }

  obtenerCursos(){
    this._cursoService.getCursos().subscribe(data => {
      console.log(data);
      this.listCursos = data;
    }, error => {
      console.log(error);
    })
  }

  obtenerProfesores(){
    this._profesorService.getProfesores().subscribe(data => {
      console.log(data);
      this.listProfesores = data;
    }, error => {
      console.log(error);
    })
  }
}
