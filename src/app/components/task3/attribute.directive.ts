import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[customAttribute]',
  standalone: true
})
export class AttributeDirective implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.textContent = 'Made by a directive using attribute!';
    this.el.nativeElement.style.color = 'red';
  }
}