import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromechecker',
  templateUrl: './palindromechecker.component.html',
  styleUrl: './palindromechecker.component.css'
})
export class PalindromecheckerComponent {
  inputWord: string = '';
  isPalindrome: boolean | null = null;

  checkPalindrome() {
    const normalizedWord = this.inputWord.replace(/[\W_]/g, '').toLowerCase();
    this.isPalindrome = normalizedWord === normalizedWord.split('').reverse().join('');
  }
}
