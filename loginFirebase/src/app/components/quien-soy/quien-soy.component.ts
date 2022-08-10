import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css'],
})
export class QuienSoyComponent implements OnInit {
  userLogged = this.authService.getUserLogged();

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.userLogged.subscribe((res) => {
      if (res === null) {
        this.router.navigate(['/login']);
      }
    });
  }
}
