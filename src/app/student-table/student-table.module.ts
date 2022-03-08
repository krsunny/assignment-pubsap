import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentTableRoutingModule } from './student-table-routing.module';
import { NgbdSortableHeader, StudentTableComponent } from './student-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    StudentTableRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [StudentTableComponent,NgbdSortableHeader]
})
export class StudentTableModule { }
