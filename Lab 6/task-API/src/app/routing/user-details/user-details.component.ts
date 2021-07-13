import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoServices } from 'src/app/services/demo-services';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
id:number=0;
user:any;
  constructor(MyActivated:ActivatedRoute,private MyService:DemoServices) { 
    this.id= MyActivated.snapshot.params.id;
  }

  ngOnInit(): void {
    this.MyService.GetUserById(this.id).subscribe(
      (res)=>{this.user = res},
      (err)=>{console.log(err)}
    );
  }

}
