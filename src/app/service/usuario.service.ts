import { Usuario } from './../core/model/Usuario';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarioActivo: Usuario = new Usuario("Fran", "Peguero", "08368812S", "Solana de los Barros", "618909131", "franpeguerogarcia@gmail.com", "23 ");

  constructor() { }
}
