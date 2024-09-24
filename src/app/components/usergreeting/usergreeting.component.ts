import { Component } from '@angular/core';

@Component({
  selector: 'app-usergreeting',
  templateUrl: './usergreeting.component.html',
  styleUrl: './usergreeting.component.css'
})
export class UsergreetingComponent {
  name: string = '';
  showMessage: string | undefined;

  displayName() {
    this.showMessage = `${this.name}, good vibes coming your way!`
}
}
