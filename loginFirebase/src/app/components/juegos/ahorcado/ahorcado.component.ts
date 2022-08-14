import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css'],
})
export class AhorcadoComponent implements OnInit {
  letrasDeBotones: string[] = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'Ñ',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  listaDePalabras: string[] = [
    'GATO',
    'PERRO',
    'LEON',
    'ELEFANTE',
    'SERPIENTE',
    'COCODRILO',
  ];
  victoria: boolean = false;
  juegoActivo: boolean = true;
  intentos: number = 6;
  puntaje: number = 0;
  imagen: number | any = 0;
  palabra: string = '';
  palabraConGuiones: string[] = [];
  userLogged: any = null;

  constructor(private authService: AuthService, private router: Router) {
    this.palabra =
      this.listaDePalabras[
        Math.round(Math.random() * (this.listaDePalabras.length - 1))
      ];
    this.palabraConGuiones = Array(this.palabra.length).fill('_');
  }

  ngOnInit(): void {
    this.authService.getUserLogged().subscribe((user) => {
      if (!user) {
        this.router.navigate(['/login']);
      } else {
        this.userLogged = user;
      }
    });
  }

  reiniciarJuego() {
    this.palabra =
      this.listaDePalabras[
        Math.round(Math.random() * (this.listaDePalabras.length - 1))
      ];
    this.palabraConGuiones = Array(this.palabra.length).fill('_');
    this.juegoActivo = true;
    this.intentos = 6;
    this.puntaje = 0;
    this.imagen = 0;
    this.victoria = false;
  }

  enviarLetra(letra: string) {
    let flagLetra: boolean = false;
    let ganaPartida: boolean = false;

    if (this.juegoActivo) {
      const flagLetraYaAdivinada: boolean = this.palabraConGuiones.some(
        (c) => c === letra
      );
      for (let i = 0; i < this.palabra.length; i++) {
        const letraPalabra = this.palabra[i];
        if (letraPalabra === letra && !flagLetraYaAdivinada) {
          this.palabraConGuiones[i] = letra;
          flagLetra = true;
          this.puntaje++;
          ganaPartida = this.palabraConGuiones.some((guion) => guion == '_');
          if (!ganaPartida) {
            this.imagen = this.imagen + '_v';
            this.juegoActivo = false;
            this.victoria = true;
            this.crearResultado();
          }
        }
      }

      if (!flagLetra) {
        if (this.intentos > 0) {
          this.intentos--;
          this.imagen++;
          if (this.intentos === 0) {
            this.juegoActivo = false;
            this.crearResultado();
          }
        }

        if (this.puntaje > 0) {
          this.puntaje--;
        }
      }
    }
  }

  crearResultado() {
    let fecha = new Date();
    let fechaActual = fecha.toLocaleDateString();
    let resultado = {
      juego: 'ahorcado',
      userUID: this.userLogged.uid,
      fechaActual: fechaActual,
      victoria: this.victoria,
    };
    this.authService
      .sendUserResultado('ahorcadoResultados', resultado)
      .then((res) => {
        console.log('Resultados Enviados!');
      })
      .catch((err) => {
        console.log('Error al enviar Resultados!');
      });
  }
}
