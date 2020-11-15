import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ModificarUsuarioService {

  constructor(private http: HttpClient, private router: Router) { }

  obtenerDatosUsuario(id) {
    let apiUrl = 'http://34.72.158.70:5000/usuario/' + id;
    return this.http.get<any>(apiUrl, {})
      .pipe(map(data => {
        return data;
      }));
  }

  modificarDatosUser(id, contra){
    let apiUrl = 'http://34.72.158.70:5000/usuario/'+id;
    return this.http.put<any>(apiUrl, {
        'contrasena': contra
    })
      .pipe(map(data => {
        return data;
      }));

  }
}
