import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-two',
  templateUrl: './day-two.component.html',
  styleUrls: ['./day-two.component.css'],
})
export class DayTwoComponent implements OnInit {
  keyword: string = '';
  name: string = '';
  age: number = 0;
  students: { name: string; age: number }[] = [];
  constructor() {}

  ngOnInit(): void {}

  Add() {
    this.keyword = 'MEARN';
  }

  get nameValid() {
    return this.name != '' && this.name.length >= 3;
  }
  get ageValid() {
    return this.age >= 18 && this.age <= 50;
  }
  AddNewStudent() {
    let student: { name: string; age: number } = {
      name: this.name,
      age: this.age,
    };
    if (this.nameValid && this.ageValid) this.students.push(student);
  }
}
