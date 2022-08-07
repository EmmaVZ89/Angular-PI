import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'User Register';
  message = '';
  registered = false;
  name: string = '';
  lastName: string = '';
  entries: any[];

  constructor() {
    this.entries = [
      { title: 'Python every day more present' },
      { title: 'Java every day more present' },
      { title: 'JavaScript every day more present' },
      { title: 'Kotlin every day more present' },
      { title: 'C# every day more present' },
    ];
  }

  userRegister() {
    this.registered = true;
    this.message = 'Registered user successfully';
  }
}
