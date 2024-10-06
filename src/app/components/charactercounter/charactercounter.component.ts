import { Component } from '@angular/core';

@Component({
  selector: 'app-charactercounter',
  templateUrl: './charactercounter.component.html',
  styleUrl: './charactercounter.component.css'
})
export class CharactercounterComponent {
  inputText: string = ''; // Input value
  characterCount: number = 0; // Count of characters

  countCharacters() {
    this.characterCount = this.inputText.length;
  }
}
