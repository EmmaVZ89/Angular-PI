import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  userLogged = this.authService.getUserLogged();
  isLogged: boolean = true;
  isLoggedLogout: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
    this.getUserLogged();
  }

  ngOnInit(): void {}

  getUserLogged() {
    this.authService.getUserLogged().subscribe((res) => {
      this.isLogged = res ? true : false;
      this.isLoggedLogout = res ? true : false;
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

  irALogin() {
    this.router.navigate(['login']);
  }

  irARegistro() {
    this.router.navigate(['registro']);
  }
}
