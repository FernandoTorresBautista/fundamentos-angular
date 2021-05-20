import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public MyName:string='Fernando property bindings'; 

  onSayHello(message) {
    console.log(message);
  }

  updateNameClassComponent(name:string) {
    return {
      'error': name.length <= 3,
      'warning': name.length > 3,
      'success': name.length <= 6,
      'bold': name.length >8
    }
  }
}
