import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcommercesRoutingModule } from './e-commerce-routing.module';
import { ECommerceComponent } from './e-commerce.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    EcommercesRoutingModule,
    FormsModule,
    NgbModule
  ],
  declarations: [ECommerceComponent]
})
export class EcommerceModule { }
