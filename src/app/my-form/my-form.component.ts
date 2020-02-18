import { Component, OnInit } from '@angular/core';
import { MyformserviceService } from '../services/myformservice.service';


@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent implements OnInit {

  name:string = "Max";
  disableFlag:boolean = true;
  l_condition:boolean = false;

  constructor(private myService: MyformserviceService) { }

  ngOnInit() {
  }

  onClick(evnt, value) {
  
    console.log(evnt);
    console.log(value);
  }

  callOneFn(event) {
    console.log("Im the parent"+ event.map(element => {
        console.log(element);
    }));
  }

}
