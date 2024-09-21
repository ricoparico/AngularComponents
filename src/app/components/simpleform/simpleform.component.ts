import { Component } from '@angular/core';

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrl: './simpleform.component.css'
})
export class SimpleformComponent {
  name: string = '';
  age: string = '';
  course: string = '';
  showMessage: string | undefined;

  displayName() {
    this.showMessage = `Name: ${this.name}, Age: ${this.age}, Course: ${this.course}`
}
}