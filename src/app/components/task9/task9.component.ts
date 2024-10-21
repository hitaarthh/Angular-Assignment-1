import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface RegistrationData {
  name: string;
  email: string;
  password: string;
  gender: string;
  country: string;
}

@Component({
  selector: 'app-task9',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task9.component.html',
  styleUrls: ['./task9.component.css']
})
export class Task9Component {
  registrationData: RegistrationData = {
    name: '',
    email: '',
    password: '',
    gender: '',
    country: ''
  };

  countries: string[] = ['India', 'USA', 'UK', 'Canada'];

  onSubmit() {
    console.log('Form submitted:', this.registrationData);
  }
}