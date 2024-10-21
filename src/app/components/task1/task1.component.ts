import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task1',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './task1.component.html',
  styleUrl: './task1.component.css'
})
export class Task1Component {
  inputText: string = '';
}