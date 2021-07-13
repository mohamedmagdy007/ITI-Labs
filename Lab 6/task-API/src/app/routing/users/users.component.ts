import { Component, OnInit } from '@angular/core';
import { DemoServices } from 'src/app/services/demo-services';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private MyService:DemoServices) { }
  users:any;
  ngOnInit(): void {
    this.MyService.GetAllUsers().subscribe(
      (res)=>{this.users=res;},
      (err)=>{console.log(err)}
    )
  }

}
