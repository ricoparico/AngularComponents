import { Component } from '@angular/core';

@Component({
  selector: 'app-bookmarklist',
  templateUrl: './bookmarklist.component.html',
  styleUrl: './bookmarklist.component.css'
})
export class BookmarklistComponent {
  url: string = ''; // Input value
  bookmarks: string[] = []; // Array to hold bookmarks

  addBookmark() {
    if (this.url) {
      this.bookmarks.push(this.url);
      this.url = ''; // Clear input after adding
    }
  }
}
