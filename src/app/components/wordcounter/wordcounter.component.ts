import { Component } from '@angular/core';

@Component({
  selector: 'app-wordcounter',
  templateUrl: './wordcounter.component.html',
  styleUrl: './wordcounter.component.css'
})
export class WordcounterComponent {
  inputText: string = '';
  wordCount: number = 0;

  countWords(): void {
    // Trim the input text and split by spaces
    const words = this.inputText.trim().split(/\s+/);
    // Count words only if the string is not empty
    this.wordCount = this.inputText ? words.length : 0;
  }
}
