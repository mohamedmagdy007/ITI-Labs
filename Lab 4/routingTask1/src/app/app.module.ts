import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentsComponent } from './routing/students/students.component';
import { StudentsDetailsComponent } from './routing/students-details/students-details.component';
import { AboutComponent } from './routing/about/about.component';
import { ErrorComponent } from './routing/error/error.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './routing/home/home.component';

const router:Routes=[
  {path:'',component:HomeComponent},
  {path:'student',component:StudentsComponent},
  {path:'student/:id',component:StudentsDetailsComponent},
  {path:'about',component:AboutComponent},
  {path:'**',component:ErrorComponent},
]
  

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentsDetailsComponent,
    AboutComponent,
    ErrorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
