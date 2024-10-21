import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Student {
  name: string;
  class: string;
}

@Component({
  selector: 'app-task2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {
  students: Student[] = [
    { name: 'Amit', class: 'S7 ECE' },
    { name: 'Arun', class: 'S7 EAC' },
    { name: 'Akhil', class: 'S7 EAC' }
  ];

  numberOfStudents: number = 0;

  ngOnInit() {
    this.calculateNumberOfStudents();
  }

  calculateNumberOfStudents() {
    this.numberOfStudents = 0;
    this.students.forEach(() => {
      this.numberOfStudents++;
    });
  }
}