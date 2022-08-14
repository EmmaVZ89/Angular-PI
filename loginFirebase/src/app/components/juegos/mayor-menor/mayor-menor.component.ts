import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-mayor-menor',
  templateUrl: './mayor-menor.component.html',
  styleUrls: ['./mayor-menor.component.css'],
})
export class MayorMenorComponent implements OnInit {
  userLogged: any = null;
  textoBotonComenzar: string = 'Comenzar Juego';
  victoria: boolean = false;
  juegoActivo: boolean = false;
  juegoTerminado: boolean = false;
  textoJuegoTerminado: string = '¡PERDISTE!';
  imagenCarta: string = '../../../../assets/mayor menor/blanca.png';
  listadoCartas: any = [
    { tipo: 'trebol', numero: 1 },
    { tipo: 'trebol', numero: 2 },
    { tipo: 'trebol', numero: 3 },
    { tipo: 'trebol', numero: 4 },
    { tipo: 'trebol', numero: 5 },
    { tipo: 'trebol', numero: 6 },
    { tipo: 'trebol', numero: 7 },
    { tipo: 'trebol', numero: 8 },
    { tipo: 'trebol', numero: 9 },
    { tipo: 'trebol', numero: 10 },
    { tipo: 'trebol', numero: 11 },
    { tipo: 'trebol', numero: 12 },
    { tipo: 'trebol', numero: 13 },
    { tipo: 'diamante', numero: 1 },
    { tipo: 'diamante', numero: 2 },
    { tipo: 'diamante', numero: 3 },
    { tipo: 'diamante', numero: 4 },
    { tipo: 'diamante', numero: 5 },
    { tipo: 'diamante', numero: 6 },
    { tipo: 'diamante', numero: 7 },
    { tipo: 'diamante', numero: 8 },
    { tipo: 'diamante', numero: 9 },
    { tipo: 'diamante', numero: 10 },
    { tipo: 'diamante', numero: 11 },
    { tipo: 'diamante', numero: 12 },
    { tipo: 'diamante', numero: 13 },
    { tipo: 'corazon', numero: 1 },
    { tipo: 'corazon', numero: 2 },
    { tipo: 'corazon', numero: 3 },
    { tipo: 'corazon', numero: 4 },
    { tipo: 'corazon', numero: 5 },
    { tipo: 'corazon', numero: 6 },
    { tipo: 'corazon', numero: 7 },
    { tipo: 'corazon', numero: 8 },
    { tipo: 'corazon', numero: 9 },
    { tipo: 'corazon', numero: 10 },
    { tipo: 'corazon', numero: 11 },
    { tipo: 'corazon', numero: 12 },
    { tipo: 'corazon', numero: 13 },
    { tipo: 'pica', numero: 1 },
    { tipo: 'pica', numero: 2 },
    { tipo: 'pica', numero: 3 },
    { tipo: 'pica', numero: 4 },
    { tipo: 'pica', numero: 5 },
    { tipo: 'pica', numero: 6 },
    { tipo: 'pica', numero: 7 },
    { tipo: 'pica', numero: 8 },
    { tipo: 'pica', numero: 9 },
    { tipo: 'pica', numero: 10 },
    { tipo: 'pica', numero: 11 },
    { tipo: 'pica', numero: 12 },
    { tipo: 'pica', numero: 13 },
  ];
  cartasAdivinar: any = [];
  puntuacion: number = 0;
  intentos: number = 10;
  cartaActual: any = null;
  numeroActual: number = 0;
  indiceActual: number = 0;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.getUserLogged().subscribe((user) => {
      if (!user) {
        this.router.navigate(['/login']);
      } else {
        this.userLogged = user;
      }
    });
  }

  empezarJuego() {
    this.intentos = 10;
    this.victoria = false;
    this.juegoActivo = true;
    this.juegoTerminado = false;
    this.textoJuegoTerminado = '¡PERDISTE!';
    this.puntuacion = 0;
    this.indiceActual = 0;
    this.textoBotonComenzar = 'Reiniciar Juego';
    this.listadoCartas.sort(() => Math.random() - 0.5);
    this.cartasAdivinar = this.listadoCartas.slice(0, 10);
    this.cartaActual = this.cartasAdivinar[this.indiceActual];
    this.numeroActual = this.cartaActual.numero;
    this.imagenCarta = `../../../../assets/mayor menor/${this.cartaActual.tipo}_${this.cartaActual.numero}.png`;
  }

  jugar(mayorMenor: string) {
    const numeroAnterior: number = this.numeroActual;
    this.indiceActual++;
    this.intentos--;
    this.cartaActual = this.cartasAdivinar[this.indiceActual];
    this.numeroActual = this.cartaActual.numero;
    this.imagenCarta = `../../../../assets/mayor menor/${this.cartaActual.tipo}_${this.cartaActual.numero}.png`;

    switch (mayorMenor) {
      case 'menor':
        if (numeroAnterior >= this.numeroActual) {
          this.puntuacion++;
        }
        break;
      case 'mayor':
        if (numeroAnterior <= this.numeroActual) {
          this.puntuacion++;
        }
        break;
    }

    if (this.indiceActual === 9) {
      this.juegoActivo = false;
      this.juegoTerminado = true;
      if (this.puntuacion >= 5) {
        this.victoria = true;
        this.textoJuegoTerminado = '¡GANASTE!';
      }
      this.crearResultado();
    }
  }

  crearResultado() {
    let fecha = new Date();
    let fechaActual = fecha.toLocaleDateString();
    let resultado = {
      juego: 'mayorMenor',
      userUID: this.userLogged.uid,
      fechaActual: fechaActual,
      victoria: this.victoria,
    };
    this.authService
      .sendUserResultado('mayorMenorResultados', resultado)
      .then((res) => {
        console.log('Resultados Enviados!');
      })
      .catch((err) => {
        console.log('Error al enviar Resultados!');
      });
  }
}
