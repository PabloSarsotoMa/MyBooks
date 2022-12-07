import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url:string;
  public logueado:boolean;
  public usuario:Usuario;
  constructor(private http:HttpClient) { 
    this.url = "http://localhost:3000"
    this.logueado = false;
  }
  register(usuario:Usuario){
    return this.http.post(this.url + "/registro",usuario)
  }
  login(usuario:Usuario){
    return this.http.post(this.url + "/login",usuario);
  }
}
