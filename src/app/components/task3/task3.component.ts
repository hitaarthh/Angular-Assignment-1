import { Component } from '@angular/core';
import { ElementDirective } from './element.directive';
import { ClassDirective } from './class.directive';
import { AttributeDirective } from './attribute.directive';

@Component({
  selector: 'app-task3',
  standalone: true,
  imports: [ElementDirective, ClassDirective, AttributeDirective],
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component {}