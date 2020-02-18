import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-test-form',
  template: `
    <div> {{childData}} </div>
    <input #Iref type="text" [(ngModel)]="childData">
    <button (click)="respond(Iref.value)"> Child Respond </button>
  `,
  styles: []
})
export class TestFormComponent implements OnInit {

  @Input() childData;

  @Output() childRespond = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  respond(l_input) {
    console.log(l_input);
    let arr = [];
    arr = [{
      name:'xyz', age:'30'
    },{
      name:'xyz13', age:'32'
    },{
      name:'xyz23', age:'35'
    }];
    this.childRespond.emit(arr);
  }

}
