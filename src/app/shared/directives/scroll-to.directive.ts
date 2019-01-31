import { Directive, HostListener, Input } from '@angular/core';
declare var $: any;

@Directive({
  selector: '[scrollTo]'
})
export class ScrollToDirective {

  @Input() scrollTo: string;

  @HostListener('click')
  public onClick() {
    if (window && window.pageYOffset) {
      let target = document.getElementById(this.scrollTo ? this.scrollTo : 'top');
      $('html,body').animate({ scrollTop: $(target).offset().top }, 1000);
    }
  }
}
