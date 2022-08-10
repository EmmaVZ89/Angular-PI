import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  userLogged = this.authService.getUserLogged();
  animacion : boolean = true;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.userLogged.subscribe((res) => {
      if(res !== null){
        this.router.navigate(['/home']);
      }
    });
  }

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
