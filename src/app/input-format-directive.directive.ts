import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputFormatDirective]'
})
export class InputFormatDirectiveDirective {

  constructor(private el: ElementRef) { }
  
}
