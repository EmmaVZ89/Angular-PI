import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  usuario: any = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService) {}

  ingresar() {
    const { email, password } = this.usuario;
    this.authService.login(email, password).then((res) => {
      console.log('Usuario logueado: ', res);
    });
  }

  ingresarConGoogle() {
    const { email, password } = this.usuario;
    this.authService.loginWithGoogle(email, password).then((res) => {
      console.log('Usuario logueado con google: ', res);
    });
  }

  obtenerUsuarioLogueado() {
    this.authService.getUserLogged().subscribe((res) => {
      console.log(res?.email);
    });
  }

  logout() {
    this.authService.logout();
  }
}
