import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '.custom-class',
  standalone: true
})
export class ClassDirective implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.textContent = 'Made by a directive using class!';
    this.el.nativeElement.style.color = 'green';
  }
}