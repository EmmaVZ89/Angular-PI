import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';
import { ChatComponent } from './components/chat/chat.component';
import { JuegosHomeComponent } from './components/juegos-home/juegos-home.component';
import { AhorcadoComponent } from './components/juegos/ahorcado/ahorcado.component';
import { MayorMenorComponent } from './components/juegos/mayor-menor/mayor-menor.component';
import { PreguntadosComponent } from './components/juegos/preguntados/preguntados.component';
import { MiJuegoComponent } from './components/juegos/mi-juego/mi-juego.component';
import { JuegosRoutingModule } from './components/juegos/juegos-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NumToArrPipe } from './num-to-arr.pipe';
import { EncuestaComponent } from './components/encuesta/encuesta.component';
import { ErrorComponent } from './components/error/error.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'quiensoy', component: QuienSoyComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'encuesta', component: EncuestaComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'juegos',
    loadChildren: () =>
      import('./components/juegos/juegos-routing.module').then(
        (module) => module.JuegosRoutingModule
      ),
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    QuienSoyComponent,
    RegistroComponent,
    ChatComponent,
    JuegosHomeComponent,
    AhorcadoComponent,
    MayorMenorComponent,
    PreguntadosComponent,
    MiJuegoComponent,
    NumToArrPipe,
    EncuestaComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    RouterModule.forRoot(appRoutes),
    JuegosRoutingModule,
    HttpClientModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
