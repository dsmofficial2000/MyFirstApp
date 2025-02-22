import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlightElement]', // selector value is pass on the hosted element
  standalone: true
})
export class HighlightElementDirective {
  
  @HostBinding('style.backgroundColor') bgColor = 'f2aa4ccff';

  constructor() { }

}

// The @HostBinding decorator is used within 
// the custom directive to apply CSS style properties 
// OR DOM related tasks on the element
