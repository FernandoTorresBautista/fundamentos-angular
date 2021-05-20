import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'custom-hello',
  templateUrl: './hello.component.html',
  styleUrls: [
    './hello.component.css'
  ]
})
export class HelloComponent {

  @Input() name:string; // desde fuera del componente // input to receive an input name 
  @Output() sayHello:EventEmitter<string> = new EventEmitter<string>();  // event emiter de eventos tipo string // decorador output e eventemiter
  
  public namesList:Array<string> = []; // new EventEmitter<string>();
  public inputName:string = ''; //public inputName:string = 'Example';

  constructor(){
    //this.name = 'Fernando 2'; 
  }

  onNameClick(){
    this.sayHello.emit("Hello")
  }

  addName(){
    console.log("method addName");
    this.namesList.push(this.inputName);
    this.inputName = '';
    console.log(this.namesList);
  }

} 