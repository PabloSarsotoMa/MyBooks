import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FormularioRegistroComponent } from './component/formulario-registro/formulario-registro.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { FormsModule } from '@angular/forms';
import { LibrosComponent } from './pages/libros/libros.component';
import { ReferenciasPipe } from './pipes/referencias.pipe';
import { AddBooksComponent } from './pages/add-books/add-books.component';
import { UpdateBooksComponent } from './pages/update-books/update-books.component';
import { LoginComponent } from './pages/login/login.component';
import { FormularioLoginComponent } from './component/formulario-login/formulario-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FormularioRegistroComponent,
    RegistroComponent,
    PerfilComponent,
    LibrosComponent,
    ReferenciasPipe,
    AddBooksComponent,
    UpdateBooksComponent,
    LoginComponent,
    FormularioLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
