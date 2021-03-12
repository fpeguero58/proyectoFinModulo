import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { SqliteDbCopy } from '@ionic-native/sqlite-db-copy/ngx';

@Injectable({
  providedIn: 'root'
})
export class CopiaDBService {

  constructor(private sqlDBCopy:SqliteDbCopy, private platform:Platform) { }

  async copiarDB(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.platform
        .ready()
        .then(() => {
          this.sqlDBCopy
            .copy("HelpCovidDB.db", 0)
            .then(() => {
              resolve("Copia terminada");
            })
            .catch((error) => {
              reject(error);
            });
        })
        .catch(() => {});
    });
  }
}
