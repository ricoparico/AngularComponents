import { Component } from '@angular/core';

@Component({
  selector: 'app-showhellobutton',
  templateUrl: './showhellobutton.component.html',
  styleUrl: './showhellobutton.component.css'
})
export class ShowhellobuttonComponent {
  showhelloworld: string | undefined;

  showMessage() {
    this.showhelloworld = 'Hello World';
}
}
