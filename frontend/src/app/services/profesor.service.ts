import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profesor } from 'src/models/profesor';
//import { Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {
  url = 'http://localhost:9000/api/profesores/';

  constructor(private http: HttpClient) { }

  getProfesores(): Observable<any> {
    return this.http.get(this.url);
  }

  eliminarProfesor(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarProfesor(profesor: Profesor): Observable<any> {
    return this.http.post(this.url, profesor);
  }

  obtenerProfesor(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarProfesor(id:string, profesor: Profesor): Observable<any>{
    return this.http.put(this.url + id, profesor);
  }
}