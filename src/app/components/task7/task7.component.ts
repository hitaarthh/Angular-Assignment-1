import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Student {
  name: string;
  class: string;
}

@Component({
  selector: 'app-task7',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task7.component.html',
  styleUrls: ['./task7.component.css']
})
export class Task7Component implements OnInit {
  students: Student[] = [
    { name: 'Amit', class: 'S7 ECE' },
    { name: 'Arun', class: 'S7 EAC' },
    { name: 'Akhil', class: 'S7 EAC' }
  ];

  sortedStudents: Student[] = [];

  ngOnInit() {
    this.sortStudents();
  }

  sortStudents() {
    this.sortedStudents = [...this.students].sort((a, b) => 
      a.name.localeCompare(b.name)
    );
  }

  get numberOfStudents(): number {
    return this.students.length;
  }
}