import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LibrosComponent } from './pages/libros/libros.component';
import { AddBooksComponent } from './pages/add-books/add-books.component';
import { UpdateBooksComponent } from './pages/update-books/update-books.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"registro", component: RegistroComponent},
  {path:"perfil",component:PerfilComponent},
  {path:"libros",component:LibrosComponent},
  {path:"addBooks",component:AddBooksComponent},
  {path:"updateBooks",component:UpdateBooksComponent},
  {path:"login2",component:LoginComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
