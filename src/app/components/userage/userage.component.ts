import { Component } from '@angular/core';

@Component({
  selector: 'app-userage',
  templateUrl: './userage.component.html',
  styleUrl: './userage.component.css'
})
export class UserageComponent {
  userAge: string = '';
  showMessage: string | undefined;

  displayAge() {
    const birthYear = +this.userAge;
    const currentYear = new Date().getFullYear();
    this.showMessage = isNaN(birthYear) 
      ? 'Please enter a valid year.' 
      : `Your age is: ${currentYear - birthYear}`;
  }
}