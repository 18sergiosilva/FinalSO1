import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.scss']
})
export class RegistrarseComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  username = "";
  correo = "";
  contrasena = "";
  nombres = "";
  apellidos = "";
  dpi = "";
  edad = null;

  agregar() {
    console.log("username->"+this.username);
    console.log("contrasena->"+this.contrasena);

    this.http.post('http://localhost:5000/usuario',
      {
        'username': this.username,
        'contrasena': this.contrasena
      }).toPromise().then((data: any) => {
        console.log(data);
        this.cancelar();
      });

  }

  cancelar() {
    this.username = "";
    this.correo = "";
    this.contrasena = "";
    this.nombres = "";
    this.apellidos = "";
    this.dpi = "";
    this.edad = null;
  }

}
