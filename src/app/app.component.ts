import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public MyName:string='Fernando property bindings'; // biding property

  onSayHello(message) {
    console.log(message);
  }
}
