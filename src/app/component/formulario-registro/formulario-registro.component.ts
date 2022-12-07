import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent {
  public isHidden:boolean;
  constructor(public usuario:UsuarioService){
    this.isHidden = true;
  }
  registrarse(nombre:string,apellidos:string,correo:string,foto:string,password:string,repeatPassword:string){
    if(password == repeatPassword){
      let nuevo_usuario = new Usuario(nombre,apellidos,correo,foto,password);
      this.isHidden = true;
      console.log("hola amigos");
      this.usuario.register(nuevo_usuario).subscribe((data)=>{
        console.log(data)
      });
    }else{
      return this.isHidden = false;
    }
  }
}
