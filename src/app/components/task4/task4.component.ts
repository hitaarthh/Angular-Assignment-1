import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task4',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.css']
})
export class Task4Component {
  email: string = '';
}