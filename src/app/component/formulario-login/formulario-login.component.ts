import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/shared/usuario.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent {
  constructor(public usuario:UsuarioService, private router:Router){}
  redirect(){
    this.router.navigate(['/libros']);
  }
  logearse(correo:string,password:string){
    let usuario:Usuario = new Usuario("","",correo,"",password)
    this.usuario.login(usuario).subscribe((data)=>{
      console.log(data);
      this.usuario.usuario = data[0];
      this.usuario.logueado = true;
      this.redirect();
    })
  }
}
