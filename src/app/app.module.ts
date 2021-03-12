import { CopiaDBService } from './service/copia-db.service';
import { DataBaseService } from './service/data-base.service';
import { SqliteDbCopy } from '@ionic-native/sqlite-db-copy/ngx';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SQLite } from '@ionic-native/sqlite/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, SQLite, SqliteDbCopy, DataBaseService, CopiaDBService],
  bootstrap: [AppComponent],
})
export class AppModule {}
