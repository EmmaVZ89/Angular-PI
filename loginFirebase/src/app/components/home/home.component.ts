import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  userLogged = this.authService.getUserLogged();

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.userLogged.subscribe((res) => {
      if (res === null) {
        this.router.navigate(['']);
      }
    });
  }
}
