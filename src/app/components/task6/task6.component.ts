import { Component } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task6',
  standalone: true,
  imports: [CommonModule, FormsModule, UpperCasePipe],
  templateUrl: './task6.component.html',
  styleUrls: ['./task6.component.css']
})
export class Task6Component {
  name: string = 'John';

  updateNameProgrammatically() {
    this.name = 'jane doe';
  }
}