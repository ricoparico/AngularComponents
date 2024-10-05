import { Component } from '@angular/core';

@Component({
  selector: 'app-evenoddchecker',
  templateUrl: './evenoddchecker.component.html',
  styleUrl: './evenoddchecker.component.css'
})
export class EvenoddcheckerComponent {
  number: number | null = null;
  result: string | null = null;

  checkEvenOdd() {
    if (this.number !== null) {
      this.result = this.number % 2 === 0 ? `${this.number} is even.` : `${this.number} is odd.`;
    } else {
      this.result = "Please enter a valid number.";
    }
  }
}
