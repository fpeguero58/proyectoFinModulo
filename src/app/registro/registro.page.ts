import { Usuario } from './../core/model/Usuario';
import { Component, OnInit } from '@angular/core';
import { DataBaseService } from '../service/data-base.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  listaComunidades:String[] = [];
  listaProvincias:String[] = [];
  nombre: String;
  apellido: String;
  dni: String;
  telefono: String;
  email: String;
  localidad: String;
  edad: String;

  constructor(private dbService:DataBaseService) { }

  ngOnInit() {
  }

  getComunidades() {
    this.dbService.getComunidades().then((datos) => {
      this.listaComunidades = datos;
    })
  }

  getProvincias() {
  }

  addUsuario() {
    let usuario: Usuario = new Usuario(this.nombre, this.apellido, this.dni, this.localidad, this.telefono, this.email, this.edad);
    this.dbService.insertarUsuario(usuario).then(() => {
      alert("Usuario registrado");
    })
  }
}
