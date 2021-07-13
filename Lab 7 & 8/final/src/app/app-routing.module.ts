import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewUserComponent } from './Components/add-new-user/add-new-user.component';
import { ErrorComponent } from './Components/error/error.component';
import { UpdataUserComponent } from './Components/updata-user/updata-user.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { UsersComponent } from './Components/users/users.component';

const routes: Routes = [
  {path:'',component:UsersComponent},
  {path:'users',component:UsersComponent},
  {path:'users/:id',component:UserDetailsComponent},
  {path:'newuser',component:AddNewUserComponent},
  {path:'users/updata/:id',component:UpdataUserComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
