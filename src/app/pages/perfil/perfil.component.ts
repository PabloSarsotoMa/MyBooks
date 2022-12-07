import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/shared/usuario.service';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  public miUsuario: Usuario;
  public isHidden:boolean;
  public isHidden2:boolean;
  constructor(public usuario:UsuarioService)
  {
    this.miUsuario = usuario.usuario;
    this.isHidden = true;
    this.isHidden2 = true;
  }
  enviar(nuevoNombre:string, nuevoApellido:string, nuevoCorreo:string, nuevoUrl:string){
    if(nuevoNombre != ""){
      this.miUsuario.nombre = nuevoNombre;
    }
    if(nuevoApellido != ""){
      this.miUsuario.apellidos = nuevoApellido;
    }
    if(nuevoCorreo != ""){
      this.miUsuario.correo = nuevoCorreo;
    }
    if(nuevoUrl != ""){
      this.miUsuario.foto = nuevoUrl;
    }
    if(nuevoNombre == "" && nuevoApellido == "" && nuevoCorreo == "" && nuevoUrl == ""){
      this.isHidden = false;
      this.isHidden2 = true;
    }else{
      this.isHidden = true;
      this.isHidden2 = false;
    }
    console.log(this.miUsuario);
  }
}
