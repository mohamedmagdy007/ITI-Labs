import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';


@Component({
  selector: 'app-updata-user',
  templateUrl: './updata-user.component.html',
  styleUrls: ['./updata-user.component.css']
})
export class UpdataUserComponent implements OnInit {
user:any;
id:any;
  constructor(private MyActivated:ActivatedRoute, private MyService:UsersService ,private router:Router) { 
    this.id= MyActivated.snapshot.params.id;
  }

  ngOnInit(): void {
    this.MyService.GetUsersById(this.id).subscribe(
      (res)=>{this.user = res;},
      (err)=>{console.log(err);}
    );
  }
  updateUser(name:string,email:string,phone:string){
    this.MyService.UpdateUserById(this.id,{name:name,email:email,phone:phone }).subscribe();
    this.router.navigateByUrl('/users')
  }

}
