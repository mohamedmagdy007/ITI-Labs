import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './Components/users/users.component';
import { UserItemsComponent } from './Components/user-items/user-items.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { AddNewUserComponent } from './Components/add-new-user/add-new-user.component';
import { UpdataUserComponent } from './Components/updata-user/updata-user.component';
import { ErrorComponent } from './Components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserItemsComponent,
    UserDetailsComponent,
    AddNewUserComponent,
    UpdataUserComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
