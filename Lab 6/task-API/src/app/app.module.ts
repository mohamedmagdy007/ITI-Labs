import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { UsersComponent } from './routing/users/users.component';
import { UserDetailsComponent } from './routing/user-details/user-details.component';
import { DemoServices, } from './services/demo-services';
import { ErrorComponent } from './routing/error/error.component';
import { DirectiveDirective } from './directive/directive.directive';
import { PipePipe } from './pipe/pipe.pipe';

const router:Routes=[
  {path:'',redirectTo:'users',pathMatch:'full'},
  {path:'users',component:UsersComponent},
  {path:'users/:id',component:UserDetailsComponent},
  {path:'**',component:ErrorComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailsComponent,
    ErrorComponent,
    DirectiveDirective,
    PipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(router)
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
