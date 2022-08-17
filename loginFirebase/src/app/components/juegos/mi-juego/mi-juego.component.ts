import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Board } from 'src/app/models/board.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-mi-juego',
  templateUrl: './mi-juego.component.html',
  styleUrls: ['./mi-juego.component.css'],
})
export class MiJuegoComponent implements OnInit {
  userLogged: any = null;
  numCols: number;
  numRows: number;
  generation: number;
  gameStatus: number; // -1 no empieza | 0 Activo | 1 Pausado
  actives: number;
  activesAnt: number;
  intentos: number;
  juegoActivo: boolean;
  juegoTerminado: boolean;
  victoria: boolean;
  textoJuegoTerminado: string;

  board: Board;

  constructor(private authService: AuthService, private router: Router) {
    this.numCols = 30;
    this.numRows = 30;
    this.generation = 0;
    this.gameStatus = 0;
    this.actives = 0;
    this.activesAnt = 0;
    this.intentos = 20;
    this.juegoActivo = true;
    this.juegoTerminado = false;
    this.victoria = false;
    this.textoJuegoTerminado = "¡PERDISTE!"

    this.board = new Board(this.numCols, this.numRows);
  }

  ngOnInit(): void {
    this.authService.getUserLogged().subscribe(async (user) => {
      if (!user) {
        this.router.navigate(['/login']);
      } else {
        this.userLogged = user;
      }
    });

    setInterval(() => {
      if (this.gameStatus === 0) {
        this.board.checkBoard();
        this.actives = this.board.countActives();

        if (this.actives !== this.activesAnt) {
          this.activesAnt = this.actives;
          this.generation++;
        }

        if (this.actives === 0) {
          this.gameStatus = 1;
          this.victoria = true;
          this.juegoActivo = false;
          this.juegoTerminado = true;
          this.textoJuegoTerminado = "¡GANASTE!"
          this.crearResultado();
        }

        if (this.actives > 0 && this.intentos === 0) {
          this.gameStatus = 1;
          this.juegoActivo = false;
          this.juegoTerminado = true;
          this.crearResultado();
        }
      }
    }, 150);
  }

  onClick(pRow: number, pCol: number) {
    if (this.intentos - 1 >= 0) {
      this.intentos--;
      this.board.changeStatus(pRow, pCol);
    }
  }

  reiniciar() {
    this.generation = 0;
    this.gameStatus = 0;
    this.actives = 0;
    this.activesAnt = 0;
    this.intentos = 20;
    this.juegoActivo = true;
    this.juegoTerminado = false;
    this.victoria = false;
    this.textoJuegoTerminado = "¡PERDISTE!"
    this.board = new Board(this.numCols, this.numRows);
  }

  crearResultado() {
    const fecha = new Date();
    const fechaActual = fecha.toLocaleDateString();
    const resultado = {
      juego: 'Juego de la Vida',
      userUID: this.userLogged.uid,
      fechaActual: fechaActual,
      victoria: this.victoria,
    };
    this.authService
      .sendUserResultado('juegoDeLaVidaResultados', resultado)
      .then((res) => {
        console.log('Resultados Enviados!');
      })
      .catch((err) => {
        console.log('Error al enviar Resultados!');
      });
  }
}
