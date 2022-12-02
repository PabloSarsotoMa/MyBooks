import { Component } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/shared/libros.service';
@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent {
  public libro:Libro
  constructor(public libroService:LibrosService){
  }
  anadir_libro(titulo:string,tipo:string,autor:string,precio:number,foto:string,codigo:number){
    let nuevoLibro = new Libro(titulo,tipo,autor,precio,foto,codigo);
    this.libroService.add(nuevoLibro);
  }
}
