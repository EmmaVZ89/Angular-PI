import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { JuegosHomeComponent } from '../juegos-home/juegos-home.component';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { MayorMenorComponent } from './mayor-menor/mayor-menor.component';
import { MiJuegoComponent } from './mi-juego/mi-juego.component';
import { PreguntadosComponent } from './preguntados/preguntados.component';

const routes: Routes = [
  { path: '', component: JuegosHomeComponent },
  { path: 'ahorcado', component: AhorcadoComponent },
  { path: 'mayormenor', component: MayorMenorComponent },
  { path: 'mijuego', component: MiJuegoComponent },
  { path: 'preguntados', component: PreguntadosComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuegosRoutingModule {}
