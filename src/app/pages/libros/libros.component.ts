import { Component } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { Usuario } from 'src/app/models/usuario';
import { LibrosService } from 'src/app/shared/libros.service';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {
  
  public misLibros: Libro[];
  public isHidden:boolean;
  public user:Usuario;
  constructor(public libroService:LibrosService, public usuarioService:UsuarioService){
    this.misLibros = [];
    this.isHidden = true;
    this.user = this.usuarioService.usuario;
  }
  public mostrar_libros(id_libro:string){//los campos siempre devuelven strings
    if(id_libro == ""){
      this.libroService.getAll(this.usuarioService.usuario.nombre)//coge el nombre del usuario logueado
      .subscribe((data: Libro[]) =>{//data es el mismo tipo que el observable que viene de la api
        this.misLibros = data;
        console.log(this.misLibros[0]);
        
      })
    }else{
      this.libroService.getOne(parseInt(id_libro),this.usuarioService.usuario.nombre)
      .subscribe((data: Libro[]) =>{
        this.misLibros = data;
      })
    }
  }
  public eliminar_libro(id_libro:string){
      this.libroService.delete(parseInt(id_libro)).subscribe();
    }
}
