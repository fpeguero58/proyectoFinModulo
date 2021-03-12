import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaUsuarioPageRoutingModule } from './pagina-usuario-routing.module';

import { PaginaUsuarioPage } from './pagina-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaUsuarioPageRoutingModule
  ],
  declarations: [PaginaUsuarioPage]
})
export class PaginaUsuarioPageModule {}
