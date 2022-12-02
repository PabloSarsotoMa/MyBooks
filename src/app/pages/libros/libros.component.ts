import { Component } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/shared/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {
  public misLibros: Libro[];
  public isHidden:boolean;
  constructor(public libroService:LibrosService){
    this.misLibros = this.libroService.getAll();
    this.isHidden = true;
  }
  mostrar_libros(id_libro:number = 0){
    this.misLibros = [];
    if(id_libro ==0){
      this.libroService.getAll();
      this.isHidden = true;
      this.misLibros = this.libroService.getAll();
    }else {
      this.libroService.getOne(id_libro);
      if(this.libroService.getOne(id_libro)!=null){
        this.misLibros.push(this.libroService.getOne(id_libro));
        this.isHidden = true;
      }else{
        this.isHidden = false;
      }
    }
  }
  eliminar_libro(id_libro:string){

    console.log(id_libro);
    
      if (this.libroService.delete(parseInt(id_libro))){
        this.misLibros = this.libroService.getAll();
      }
  }
}
