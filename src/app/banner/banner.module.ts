import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannersRoutingModule } from './banner-routing.module';
import { BannerComponent } from './banner.component';

@NgModule({
  imports: [
    CommonModule,
    BannersRoutingModule
  ],
  declarations: [BannerComponent]
})
export class BannersModule { }
