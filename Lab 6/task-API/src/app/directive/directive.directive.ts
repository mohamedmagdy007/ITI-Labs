import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class DirectiveDirective {

  constructor(private MyRef:ElementRef) {
    MyRef.nativeElement.style.backgroundColor="red";
    MyRef.nativeElement.style.color="white";
    MyRef.nativeElement.style.fontSize="larger";
    MyRef.nativeElement.style.fontFamily="sans-serif";
   }
   element=0;
  @HostListener('click')  click(){
    if(this.element===0){
      this.MyRef.nativeElement.style.backgroundColor="#d1e7dd";
      this.MyRef.nativeElement.style.color="white";
      this.MyRef.nativeElement.style.fontSize="larger";
      this.MyRef.nativeElement.style.fontFamily="sans-serif";
      this.element=1
    }else{
      this.MyRef.nativeElement.style.backgroundColor="red";
      this.element=0;
    }

  }
}
