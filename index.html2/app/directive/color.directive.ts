import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  
  constructor(private el:ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.changeColor('yellow');
    }
    @HostListener('mouseleave') onMouseLeave(){
    this.changeColor("") 
  }

    changeColor(color:string) {
      console.log("here el",this.el);
      
    this.el.nativeElement.style.backgroundColor = color;
    }

}
