import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Small Calculator';
  numberOne: number = 0;
  numberTwo: number = 0;
  result: number = 0;
  alert: string = "";

  sumNumbers(): void {
    this.alert = "";
    this.result = this.numberOne + this.numberTwo;
  }

  subtractNumbers(): void {
    this.alert = "";
    this.result = this.numberOne - this.numberTwo;
  }

  multiplyNumbers(): void {
    this.alert = "";
    this.result = this.numberOne * this.numberTwo;
  }

  divideNumbers(): void {
    if(this.numberTwo === 0) {
      this.alert = "It is not possible to divide a number by 0";
    } else {
      this.result = this.numberOne / this.numberTwo;
    }
  }
}
