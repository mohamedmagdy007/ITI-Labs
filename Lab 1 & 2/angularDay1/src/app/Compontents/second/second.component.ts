import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  imgsrc:string="assets/images/1.jpg";
  imgs:string[] = ["assets/images/1.jpg","assets/images/2.jpg","assets/images/3.jpg","assets/images/4.jpg","assets/images/5.jpg"];
  index:number=0;
  autoImg:any;
  next(){
    if(this.index < this.imgs.length-1){
      this.index ++;
      this.imgsrc= this.imgs[this.index];
    }
  }
  prev(){
    if(this.index!=0){
      this.index --;
      this.imgsrc= this.imgs[this.index];
    }
  }
  show(){
    this.autoImg =setInterval(()=>{
      if(this.index<this.imgs.length-1){
        this.index ++;
        this.imgsrc= this.imgs[this.index];
      }else{
        this.index=0
      }
    },2000)
  }
  stop(){
    clearInterval(this.autoImg)
  }
}
