import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.css'],
})
export class PreguntadosComponent implements OnInit {
  userLogged: any = null;
  listadoPaises: any = [];
  listadoPreguntas: any = [];
  victoria: boolean = false;
  juegoActivo: boolean = false;
  juegoTerminado: boolean = false;
  textoJuegoTerminado: string = '¡PERDISTE!';
  puntuacion: number = 0;
  intentos: number = 10;
  preguntaActual: any = null;
  preguntasCargadas: boolean = false;
  indiceActual: number = 0;
  respuestaCorrecta: boolean = false;
  respuestaIncorrecta: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private apiPaises: ApiService
  ) {
    this.apiPaises.getPaises();
  }

  ngOnInit(): void {
    this.authService.getUserLogged().subscribe(async (user) => {
      if (!user) {
        this.router.navigate(['/login']);
      } else {
        this.userLogged = user;
        const paises = await this.apiPaises.getPaises();
        this.listadoPaises = paises.map((pais: any) => {
          return {
            nombre: pais.translations.spa.official,
            bandera: pais.flags.png,
          };
        });
        this.empezarJuego();
      }
    });
  }

  empezarJuego() {
    this.generarPreguntas();
    this.preguntaActual = this.listadoPreguntas[this.indiceActual];
    this.juegoActivo = true;
  }

  generarPreguntas() {
    this.listadoPaises.sort(() => Math.random() - 0.5);
    this.listadoPreguntas = this.listadoPaises.slice(0, 10).map((pais: any) => {
      const opcion2 = this.listadoPaises[this.generarNumeroRandom()].nombre;
      const opcion3 = this.listadoPaises[this.generarNumeroRandom()].nombre;
      const opcion4 = this.listadoPaises[this.generarNumeroRandom()].nombre;
      const opciones = [pais.nombre, opcion2, opcion3, opcion4].sort(
        () => Math.random() - 0.5
      );
      return {
        respuesta: pais.nombre,
        opciones: opciones,
        bandera: pais.bandera,
      };
    });
    this.preguntasCargadas = true;
  }

  generarNumeroRandom() {
    return Math.floor(Math.random() * 249);
  }

  jugar(opcion: string, evento: Event) {
    if (this.juegoActivo) {
      const btn = <HTMLButtonElement>evento.target;
      btn.disabled = true;
      if (opcion === this.preguntaActual.respuesta) {
        this.puntuacion++;
        this.respuestaCorrecta = true;
        setTimeout(() => {
          this.respuestaCorrecta = false;
        }, 300);
      } else {
        this.respuestaIncorrecta = true;
        setTimeout(() => {
          this.respuestaIncorrecta = false;
        }, 300);
      }

      if (this.indiceActual < 9) {
        this.indiceActual++;
        setTimeout(() => {
          this.preguntaActual = this.listadoPreguntas[this.indiceActual];
        }, 500);
      }

      if (this.intentos > 0) {
        this.intentos--;
        if (this.intentos === 0) {
          this.juegoActivo = false;
          this.juegoTerminado = true;
          if (this.puntuacion >= 3) {
            this.victoria = true;
            this.textoJuegoTerminado = '¡GANASTE!';
          }
          this.crearResultado();
        }
      }
    }
  }

  reiniciarJuego() {
    this.generarPreguntas();
    this.indiceActual = 0;
    this.puntuacion = 0;
    this.intentos = 10;
    this.juegoActivo = true;
    this.victoria = false;
    this.juegoTerminado = false;
    this.textoJuegoTerminado = '¡PERDISTE!';
    this.preguntaActual = this.listadoPreguntas[this.indiceActual];
  }

  crearResultado() {
    const fecha = new Date();
    const fechaActual = fecha.toLocaleDateString();
    const resultado = {
      juego: 'preguntados',
      userUID: this.userLogged.uid,
      fechaActual: fechaActual,
      victoria: this.victoria,
    };
    this.authService
      .sendUserResultado('preguntadosResultados', resultado)
      .then((res) => {
        console.log('Resultados Enviados!');
      })
      .catch((err) => {
        console.log('Error al enviar Resultados!');
      });
  }
}
