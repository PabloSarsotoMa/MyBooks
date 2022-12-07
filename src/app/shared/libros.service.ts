import { Injectable } from '@angular/core';
import { Libro } from '../models/libro';
import { LibrosComponent } from '../pages/libros/libros.component';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  private libros: Libro[];
  private url:String;
  constructor(private http:HttpClient) {
    this.url = "http://localhost:3000"
  }
  getAll(userId:string){
    return this.http.get(this.url + "/libros?id_usuario=" + userId);
  }
  getOne(id_libro:number,userId:string){
    return this.http.get(this.url + "/libros?id_usuario=" + userId + "&id_libro=" + id_libro);
  }
  add(libro:Libro){
    console.log(libro);
    return this.http.post(this.url + "/libros", libro);
  }
  edit(libro:Libro){
    return this.http.put(this.url + "/libros", libro);
  }
  delete(id_libro:Number){
    const httpOptions = {header:null,body:{id_libro}}
    return this.http.delete(this.url + "/libros", httpOptions);
  }
}
