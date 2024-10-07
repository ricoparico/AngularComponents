import { Component } from '@angular/core';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrl: './shoppinglist.component.css'
})
export class ShoppinglistComponent {
  itemName: string = '';
  shoppingList: string[] = [];

  addItem() {
    if (this.itemName.trim()) {
      this.shoppingList.push(this.itemName.trim());
      this.itemName = '';
    }
  }

  removeItem(index: number) {
    this.shoppingList.splice(index, 1);
  }
}
