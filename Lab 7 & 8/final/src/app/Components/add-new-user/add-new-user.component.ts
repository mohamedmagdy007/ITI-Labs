import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css']
})
export class AddNewUserComponent implements OnInit {

  constructor(private MyService:UsersService,private router:Router) { }

  ngOnInit(): void {
  }
  AddUser(name:string,email:string,phone:string){
    let user={name:name, email:email,phone:phone};
    this.MyService.AddNewUser(user).subscribe();
    this.router.navigateByUrl('/users');
  }
}
