import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task5',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task5.component.html',
  styleUrls: ['./task5.component.css']
})
export class Task5Component {
  name: string = 'John';

  updateNameProgrammatically() {
    this.name = 'Jane';
  }
}