import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private MyClient:HttpClient) { }

  private BaseUrl = "http://localhost:3000/users";


  GetAllUsers(){
    return this.MyClient.get(this.BaseUrl);
  }

  GetUsersById(id:number){
    return this.MyClient.get(this.BaseUrl+"/"+id);
  }

  AddNewUser(user:any){
    return this.MyClient.post(this.BaseUrl, user);
  }
  DeleteUserById(id:number){
    return this.MyClient.delete(`${this.BaseUrl}/${id}`);
  }

  UpdateUserById(id:number, user:any){
    return this.MyClient.put(`${this.BaseUrl}/${id}`, user);
  }
}
