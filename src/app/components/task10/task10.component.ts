import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task10',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task10.component.html',
  styleUrls: ['./task10.component.css']
})
export class Task10Component {
  cartItems: string[] = ['Bread', 'Milk', 'Egg'];
  newItem: string = '';

  addItem() {
    if (this.newItem.trim() !== '') {
      this.cartItems.push(this.newItem.trim());
      this.newItem = '';
    }
  }

  removeItem(index: number) {
    this.cartItems.splice(index, 1);
  }
}