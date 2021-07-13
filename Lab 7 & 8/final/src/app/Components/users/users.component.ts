import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private MyService:UsersService) { }
  users:any;
  ngOnInit(): void {
    this.MyService.GetAllUsers().subscribe(
      (res)=>{this.users=res},
      (err)=>{console.log(err)}
    )
  }

}
