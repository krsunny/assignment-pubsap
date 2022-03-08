import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicdivRoutingModule } from './dynamic-div-routing.module';
import { DynamicDivComponent } from './dynamic-div.component';

@NgModule({
  imports: [
    CommonModule,
    DynamicdivRoutingModule
  ],
  declarations: [DynamicDivComponent]
})
export class DynamicDivModule { }
