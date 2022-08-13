import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-juegos-home',
  templateUrl: './juegos-home.component.html',
  styleUrls: ['./juegos-home.component.css'],
})
export class JuegosHomeComponent implements OnInit {
  userLogged: any = null;

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
}
