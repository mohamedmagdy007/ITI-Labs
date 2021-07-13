import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './Compontents/firstCompontent/first.component';
import { SecondComponent } from './Compontents/second/second.component';
import { DayTwoComponent } from './Compontents/day-two/day-two.component';
import { FormsModule } from '@angular/forms';

/**decorator */
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    DayTwoComponent,
    /**
     * 1-components
     * 2-pipes
     * 3-directives
     */
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
