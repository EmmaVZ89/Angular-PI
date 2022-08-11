import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  usuario: any = {
    email: '',
    password: '',
  };
  userLogged = this.authService.getUserLogged();
  animacion: boolean = true;
  mensajeRespuesta: boolean | string = false;
  isLogged: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.userLogged.subscribe((res) => {
      if (res !== null) {
        this.router.navigate(['/home']);
      }
    });
  }

  getUserLogged() {
    this.authService.getUserLogged().subscribe((res) => {
      this.isLogged = res ? true : false;
    });
  }

  registrarUsuario() {
    const { email, password } = this.usuario;
    this.authService
      .register(email, password)
      .then((res) => {
        if (res !== null) {
          this.router.navigate(['home']);
        }
        console.log('Usuario registrado con exito: ', res);
      })
      .catch((err) => {
        switch (err.code) {
          case 'auth/internal-error':
            this.mensajeRespuesta = 'Los campos estan vacios';
            break;
          case 'auth/operation-not-allowed':
            this.mensajeRespuesta = 'La operación no está permitida.';
            break;
          case 'auth/email-already-in-use':
            this.mensajeRespuesta = 'El email ya está registrado.';
            break;
          case 'auth/invalid-email':
            this.mensajeRespuesta = 'El email no es valido.';
            break;
          case 'auth/weak-password':
            this.mensajeRespuesta =
              'La contraseña debe tener al menos 6 caracteres';
            break;
          default:
            this.mensajeRespuesta = 'Error al crear el usuario.';
            break;
        }
      });
  }
}
