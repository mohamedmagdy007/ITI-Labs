import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  id:number=1;
  user:any;
  constructor(private MyActivated:ActivatedRoute, private MyService:UsersService) { 
    this.id= MyActivated.snapshot.params.id;
  }

  ngOnInit(): void {
    this.MyService.GetUsersById(this.id).subscribe(
      (res)=>{this.user = res;},
      (err)=>{console.log(err);}
    );
  }

}
