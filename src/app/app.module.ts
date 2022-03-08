import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { CountDownComponent } from './count-down/count-down.component';
import { TimerComponent } from './timer/timer.component';
import { StudentTableComponent } from './student-table/student-table.component';
import { DynamicDivComponent } from './dynamic-div/dynamic-div.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
