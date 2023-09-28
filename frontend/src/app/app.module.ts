import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { AlumnoComponent } from './components/alumno/alumno.component';
import { ProfesorComponent } from './components/profesor/profesor.component';
import { CursoComponent } from './components/curso/curso.component';
import { MatriculaComponent } from './components/matricula/matricula.component';
import { CrearAlumnoComponent } from './components/crear-alumno/crear-alumno.component';

import { HttpClientModule } from '@angular/common/http';
import { EditarAlumnoComponent } from './components/editar-alumno/editar-alumno.component';
import { CrearCursoComponent } from './components/crear-curso/crear-curso.component';
import { CrearProfesorComponent } from './components/crear-profesor/crear-profesor.component';
import { EditarProfesorComponent } from './components/editar-profesor/editar-profesor.component';
import { CrearMatriculaComponent } from './components/crear-matricula/crear-matricula.component';
import { EditarMatriculaComponent } from './components/editar-matricula/editar-matricula.component'

@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    ProfesorComponent,
    CursoComponent,
    MatriculaComponent,
    CrearAlumnoComponent,
    EditarAlumnoComponent,
    CrearCursoComponent,
    CrearProfesorComponent,
    EditarProfesorComponent,
    CrearMatriculaComponent,
    EditarMatriculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
