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
  textoBotonComenzar: string = 'Comenzar Juego';
  victoria: boolean = false;
  juegoActivo: boolean = false;
  juegoTerminado: boolean = false;
  textoJuegoTerminado: string = '¡PERDISTE!';
  puntuacion: number = 0;
  intentos: number = 10;
  cartaActual: any = null;
  numeroActual: number = 0;
  indiceActual: number = 0;


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
            nombre: pais.name.common,
            bandera: pais.flags.png,
          };
        });
      }
    });
  }
}

// 4  - Angola
// 5  - Bolivia
// 7  - Peru
// 9  - Alemania 
// 11 - Afganistan
// 16 - Indonesia
// 20 - Gabon 
// 25 - Turquía
// 34 - Cuba 
// 49 - Bermuda
// 53 - Rusia 
// 55 - Japon
// 58 - Honduras
// 62 - Argentina
// 67 - El Salvador
// 70 - Brasil 
// 87 - Ethiopia
// 90 - India
// 91 - Puerto Rico
// 96 - Polonia
// 103 - Haiti