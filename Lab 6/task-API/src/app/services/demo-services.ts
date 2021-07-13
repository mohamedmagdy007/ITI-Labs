import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoServices {

  constructor(private MyClient:HttpClient ) { }
  apiUrl = "https://jsonplaceholder.typicode.com/users"
  GetAllUsers(){
    return this.MyClient.get(this.apiUrl);
  }

  GetUserById(id:number){
    // return this.MyClient.get(this.baseUrl+"/"+id);
    return this.MyClient.get(`${this.apiUrl}/${id}`);
  }

  AddNewUser(user:any){
    return this.MyClient.post(this.apiUrl, user);
  }

  DeleteUserById(id:number){
    return this.MyClient.delete(`${this.apiUrl}/${id}`);
  }

  UpdateUserById(id:number, user:any){
    return this.MyClient.put(`${this.apiUrl}/${id}`, user);
  }
}
