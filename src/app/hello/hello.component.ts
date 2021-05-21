import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GreetenService } from '../greetings.service';

@Component({
  selector: 'custom-hello',
  templateUrl: './hello.component.html',
  styleUrls: [
    './hello.component.css'
  ],
  providers:[GreetenService]
})
export class HelloComponent {

  @Input() name:string; 
  @Output() sayHello:EventEmitter<string> = new EventEmitter<string>();  
  
  public namesList:Array<string> = []; 
  public inputName:string = ''; 

  constructor(private grettings:GreetenService){}

  onNameClick(){
    console.log("Counter in Hello Component i:",this.grettings.counter);
    this.sayHello.emit("Hello")
  }

  addName(){
    this.namesList.push(this.inputName);
    this.inputName = '';
    console.log(this.namesList);
  }
} 