import { Component } from '@angular/core';

@Component({
  selector: 'app-displayname',
  templateUrl: './displayname.component.html',
  styleUrl: './displayname.component.css'
})
export class DisplaynameComponent {
  userInput: string = '';
  showMessage: string | undefined;

  displayName() {
    this.showMessage = this.userInput;
}
}