import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicationtable',
  templateUrl: './multiplicationtable.component.html',
  styleUrl: './multiplicationtable.component.css'
})
export class MultiplicationtableComponent {
  number: number = 1; // Default number
  multiplicationTable: number[] = [];

  generateTable() {
    this.multiplicationTable = Array.from({ length: 10 }, (_, index) => this.number * (index + 1));
  }
}
