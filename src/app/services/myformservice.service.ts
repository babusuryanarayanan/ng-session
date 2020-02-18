import { Injectable } from '@angular/core';



 @Injectable({
  providedIn: 'root'
})
export class MyformserviceService {

  formData123 = [
    `My Name is Max`,
    `I do swimming regularly`,
    `I ride bike saturday`
  ];

  constructor() { }
}
