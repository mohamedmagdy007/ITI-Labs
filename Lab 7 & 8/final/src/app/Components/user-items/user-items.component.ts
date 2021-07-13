import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'tr[app-user-items]',
  templateUrl: './user-items.component.html',
  styleUrls: ['./user-items.component.css']
})
export class UserItemsComponent implements OnInit {
  users:any;
  constructor(private MyService:UsersService,private router:Router) { }

  ngOnInit(): void {
  }
  @Input() user:any;
  deleteUser(id:number){
    console.log(id);
    this.MyService.DeleteUserById(id).subscribe();
    this.MyService.GetAllUsers().subscribe(
      (res)=>{this.users= res;},
      (err)=>{console.log(err);}
    );
    window.location.href="/users"
  }
}
