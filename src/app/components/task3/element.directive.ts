import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: 'custom-element',
  standalone: true
})
export class ElementDirective implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.textContent = 'Made by a directive using element name!';
    this.el.nativeElement.style.color = 'blue';
  }
}