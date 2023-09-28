import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Matricula } from 'src/models/matricula';
//import { Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class MatriculaService {
  url = 'http://localhost:9000/api/matriculas/';

  constructor(private http: HttpClient) { }

  getMatriculas(): Observable<any> {
    return this.http.get(this.url);
  }

  eliminarMatricula(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarMatricula(matricula: Matricula): Observable<any> {
    return this.http.post(this.url, matricula);
  }

  obtenerMatricula(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarMatricula(id:string, matricula: Matricula): Observable<any>{
    return this.http.put(this.url + id, matricula);
  }
}