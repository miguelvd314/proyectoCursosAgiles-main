import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from 'src/models/curso';
//import { Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  url = 'http://localhost:9000/api/cursos/';

  constructor(private http: HttpClient) { }

  getCursos(): Observable<any> {
    return this.http.get(this.url);
  }

  eliminarCurso(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarCurso(alumno: Curso): Observable<any> {
    return this.http.post(this.url, alumno);
  }

  obtenerCurso(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarCurso(id:string, curso: Curso): Observable<any>{
    return this.http.put(this.url + id, curso);
  }
}