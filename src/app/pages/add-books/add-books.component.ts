import { Component } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/shared/libros.service';
import { UsuarioService } from 'src/app/shared/usuario.service';
@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent {
  public libro:Libro
  constructor(public libroService:LibrosService,public usuarioService:UsuarioService){
  }
  anadir_libro(titulo:string,tipo:string,autor:string,precio:number,foto:string,codigo:number){
    let user_id = this.usuarioService.usuario.id_usuario;
    console.log(user_id);
    let nuevoLibro = new Libro(titulo,tipo,autor,precio,foto,codigo,user_id);
    this.libroService.add(nuevoLibro).subscribe((data: Libro) =>{
      this.libro = data;
    });
  }
}
