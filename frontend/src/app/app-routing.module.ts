import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoComponent } from './components/alumno/alumno.component';
import { CrearAlumnoComponent } from './components/crear-alumno/crear-alumno.component';
import { CrearCursoComponent } from './components/crear-curso/crear-curso.component';
import { CrearMatriculaComponent } from './components/crear-matricula/crear-matricula.component';
import { CrearProfesorComponent } from './components/crear-profesor/crear-profesor.component';
import { CursoComponent } from './components/curso/curso.component';
import { MatriculaComponent } from './components/matricula/matricula.component';
import { ProfesorComponent } from './components/profesor/profesor.component';

const routes: Routes = [
  { path: 'alumno', component:AlumnoComponent },
  { path: 'crear-alumno', component:CrearAlumnoComponent },
  { path: 'editar-alumno/:id', component:CrearAlumnoComponent },
  { path: 'profesor', component:ProfesorComponent },
  { path: 'crear-profesor', component:CrearProfesorComponent },
  { path: 'editar-profesor/:id', component:CrearProfesorComponent },
  { path: 'curso', component:CursoComponent },
  { path: 'crear-curso', component:CrearCursoComponent },
  { path: 'editar-curso/:id', component:CrearCursoComponent },
  { path: 'matricula', component:MatriculaComponent },
  { path: 'crear-matricula', component:CrearMatriculaComponent },
  { path: 'editar-matricula/:id', component:CrearMatriculaComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
