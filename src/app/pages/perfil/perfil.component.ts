import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  public miUsuario: Usuario;
  public isHidden:boolean;
  public isHidden2:boolean;
  constructor()
  {
    this.miUsuario = new Usuario(1,"Pedro","Jimenez Castro","PedritoJCast@gmail.com","../../../assets/img/libreria fondo.jpg","HolaMundo");
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
      this.miUsuario.url = nuevoUrl;
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
