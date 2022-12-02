import { Component } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/shared/libros.service';

@Component({
  selector: 'app-update-books',
  templateUrl: './update-books.component.html',
  styleUrls: ['./update-books.component.css']
})
export class UpdateBooksComponent {
  public libro:Libro
  public isHidden:boolean;
  constructor(public libroService:LibrosService){
    this.isHidden = true;
  }
  modificar_libro(titulo:string,tipo:string,autor:string,precio:number,foto:string,codigo:number){
    let nuevoLibro = new Libro(titulo,tipo,autor,precio,foto,codigo);
    this.libroService.edit(nuevoLibro);
    if(this.libroService.edit(nuevoLibro)){
      this.libro = nuevoLibro;
      this.isHidden = true;
    }else{
      this.isHidden = false;
    }
  }
}
