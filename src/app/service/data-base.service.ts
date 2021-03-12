import { Usuario } from './../core/model/Usuario';
import { CopiaDBService } from './copia-db.service';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

  private db: SQLiteObject;
 
  constructor(
    private platform: Platform,
    private copiaDB: CopiaDBService,
    private sqlite: SQLite
  ) {
    this.platform
      .ready()
      .then(() => {
        this.copiaDB
          .copiarDB()
          .then(() => {})
          .catch(() => {});
      })
      .catch(() => {});
  }

  executeSentence(target: any[], sqlSentence: string, searchParam: any[]) {
    return new Promise<any>((resolveUno) => {
      let consultable = true;
      new Promise((resolve, reject) => {
        if (!this.db) {
          this.openDB()
            .then(() => {
              resolve(consultable);
            })
            .catch(() => {
              consultable = false;
              reject(consultable);
            });
        } else {
          resolve(consultable);
        }
      })
        .then((bandera) => {
          if (bandera) {
            this.db
              .executeSql(sqlSentence, searchParam)
              .then((data) => {
                for (let i = 0; i < data.rows.length; i++) {
                  let obj = data.rows.item(i);
                  target.push(obj);
                }
                resolveUno(target);
              })
              .catch((e) => {});
          }
        })
        .catch((error) => {});
    });
  }

  openDB(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.platform
        .ready()
        .then(() => {
          this.sqlite
            .create(this.getConector())
            .then((db: SQLiteObject) => {
              this.db = db;
              resolve("BBDD preparada");
            })
            .catch((err) => {
              reject("Error en la preparación de la bbdd: " + err);
            });
        })
        .catch();
    });
  
  }

  private getConector() {
    return {
      name: "HelpCovidDB.db",
      location: "default",
      createFromLocation: 1,
    };
  }

  getComunidades() {
    const sql = "SELECT nombre_comunidad FROM comunidades_autonomas WHERE 1";
    let listaComunidades: String[] = []
    return this.executeSentence([listaComunidades], sql, []);
  }

  getProvincias(id:number) {
    const sql = "SELECT nombreProvincia FROM provincias WHERE idComunidad = ?";
    return this.executeSentence([], sql, [id]);
  }

  getMunicipios(id:number) {
    const sql = "SELECT nombreMunicipio FROM municipios WHERE idProvincia = ?";
    return this.executeSentence([], sql, [id]);
  }


  insertarUsuario(usuario: Usuario) {
    let nombre: String = usuario.nombre;
    let apellido: String = usuario.apellido;
    let dni: String = usuario.dni;
    let edad: String = usuario.edad;
    let email: String = usuario.email;
    let localidad: String = usuario.localidad;
    let telefono: String = usuario.telefono;
    const sql = "INSERT INTO usuario(nombre, apellidos, dni, edad, email, localidad, telefono) VALUES (?,?,?,?,?,?,?)";
    return this.executeSentence([], sql, [nombre, apellido, dni, edad, email, localidad, telefono]);
  }

}
