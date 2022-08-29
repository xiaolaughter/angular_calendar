import { ElementRef, Directive } from '@angular/core';

@Directive({
  selector: '[appFocusElement]'
})
export class FocusElementDirective {

  constructor(private el: ElementRef) { }

  ngOnInit() {
    const element = (this.el.nativeElement as HTMLElement);
    element.focus();
  }

}
