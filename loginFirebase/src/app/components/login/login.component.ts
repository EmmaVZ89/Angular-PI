import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario: any = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

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
