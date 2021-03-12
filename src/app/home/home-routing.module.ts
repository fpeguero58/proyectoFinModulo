import { InicioSesionPageModule } from './../inicio-sesion/inicio-sesion.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'registro',
    loadChildren: () => import('../registro/registro.module').then(m => m.RegistroPageModule)
  }, 
  {
  path: 'inicio-sesion',
  loadChildren: () => import('../inicio-sesion/inicio-sesion.module').then(m => m.InicioSesionPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
