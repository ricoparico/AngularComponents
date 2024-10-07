import { Component } from '@angular/core';

@Component({
  selector: 'app-guessnumbergame',
  templateUrl: './guessnumbergame.component.html',
  styleUrl: './guessnumbergame.component.css'
})
export class GuessnumbergameComponent {
  targetNumber: number = this.generateRandomNumber();
  userGuess: number | null = null; 
  message: string = ''; 
  attempts: number = 0; 

  generateRandomNumber(): number {
    return Math.floor(Math.random() * 100) + 1; 
  }

  checkGuess(): void {
    if (this.userGuess === null) return;

    this.attempts++;
    if (this.userGuess < this.targetNumber) {
      this.message = 'Too low! Try again.';
    } else if (this.userGuess > this.targetNumber) {
      this.message = 'Too high! Try again.';
    } else {
      this.message = `Congratulations! You guessed the number in ${this.attempts} attempts.`;
    }
  }

  resetGame(): void {
    this.targetNumber = this.generateRandomNumber();
    this.userGuess = null;
    this.message = '';
    this.attempts = 0;
  }
}
