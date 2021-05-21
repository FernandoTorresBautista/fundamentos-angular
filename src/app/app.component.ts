import { Component } from '@angular/core';

import { GreetenService } from './greetings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public MyName:string='Fernando property bindings'; 
  public titleStyles:{};

  constructor(private grettings:GreetenService) {
  }

  onSayHello(message) {
    this.grettings.handleGreeting(message);
    this.updateTitleStyles();
  }

  updateNameClassComponent(name:string) {
    return {
      'error': name.length <= 3,
      'warning': name.length > 3,
      'success': name.length <= 6,
      'bold': name.length >8
    }
  }

  // change the title on click in names addings
  updateTitleStyles() {
    this.titleStyles = {
      'margin-top': '40px',
      'color': this.grettings.counter < 3 ? 'green':'goldenrod'
    }
  }
}
