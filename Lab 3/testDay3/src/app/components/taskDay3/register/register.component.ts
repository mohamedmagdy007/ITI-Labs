

import { Output } from '@angular/core';
import { Component, OnInit,EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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

  @Output() regEvent = new EventEmitter();
 
  add(){
    let student:{ name: string; age: number } = {
     name:this.name,
      age: this.age,
    };
    if(this.nameValid && this.ageValid){
      this.regEvent.emit(student);
    }else{
        console.log("Name Is FALSE");
    }

  }

}
