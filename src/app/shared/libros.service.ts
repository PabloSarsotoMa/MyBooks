import { Injectable } from '@angular/core';
import { Libro } from '../models/libro';
import { LibrosComponent } from '../pages/libros/libros.component';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  private libros: Libro[];
  constructor() {
    this.libros = [
      new Libro("El Principito","tapa blanda","Menchu",34,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzcLe2m7KklPfNoToyTBctdk5YQxmnZJw4mw&usqp=CAU",1)
    ]
  }
  getAll():Libro[]{
    return this.libros;
  }
  getOne(id_libro:number):Libro{
    let libro:Libro;
    for(let i:number=0;i<this.libros.length;i++){
      if(this.libros[i].id_libro == id_libro){
        libro = this.libros[i];
      }
    }
    return libro;
  }
  add(libro:Libro):void{
    this.libros.push(libro);
  }
  edit(libro:Libro):Boolean{
    let edit:Boolean;
    for(let i:number = 0;i<this.libros.length;i++){
    if(this.libros[i].id_libro == libro.id_libro){
      this.libros[i] = libro;
      edit = true;
    }else{
      edit = false;
    }
    }
    return edit;
  }
  delete(id_libro:Number):Boolean{
    let borrar:Boolean = false;
    for (let i:number = 0; i<this.libros.length;i++){
      console.log(this.libros[i]);
      console.log(id_libro)
      if (this.libros[i].id_libro == id_libro){
        this.libros.splice(i,1);
        borrar = true;
      }
    }
    return borrar;
  }
}
