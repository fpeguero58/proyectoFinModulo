import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioSesionPage } from './inicio-sesion.page';

const routes: Routes = [
  {
    path: '',
    component: InicioSesionPage
  },
  {
    path: 'pagina-usuario',
    loadChildren: () => import('../pagina-usuario/pagina-usuario.module').then(m => m.PaginaUsuarioPageModule)
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioSesionPageRoutingModule {}
