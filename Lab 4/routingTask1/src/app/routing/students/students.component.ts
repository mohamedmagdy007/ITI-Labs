import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name: string = '';
  age: number = 0;
   
  ourValidationForm = new FormGroup({
    name:new FormControl("",[Validators.required,Validators.minLength(3)]),
    age:new FormControl(0,[Validators.min(18), Validators.max(50),Validators.required])
  });
  get nameValid(){
    return this.ourValidationForm.controls.name.valid;
  }

  get ageValid(){
    return this.ourValidationForm.controls.age.valid;
  }


 
  add(){
    let student:{ name: string; age: number } = {
     name:this.name,
      age: this.age,
    };
    if(this.nameValid && this.ageValid){
      console.log("Name Is True");
    }else{
        console.log("Name Is FALSE");
    }

  }
}
