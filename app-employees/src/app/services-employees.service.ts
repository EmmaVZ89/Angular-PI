import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicesEmployeesService {
  constructor() {}

  showMessage(message: string) {
    alert(message);
  }
}
