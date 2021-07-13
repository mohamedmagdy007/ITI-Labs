import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testDay3';
  students:{name:string,age:number}[]=[]
  GetData(data:any){
    let student :{name:string,age:number}
    student= data;
    this.students.push(student)
  }
}
