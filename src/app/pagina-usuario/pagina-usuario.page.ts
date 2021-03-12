import { UsuarioService } from './../service/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-usuario',
  templateUrl: './pagina-usuario.page.html',
  styleUrls: ['./pagina-usuario.page.scss'],
})
export class PaginaUsuarioPage implements OnInit {

  constructor(public usuarioActivo: UsuarioService) { }

  ngOnInit() {
  }

}
