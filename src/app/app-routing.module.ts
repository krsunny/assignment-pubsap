import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'banner',
    loadChildren: () => import('./banner/banner.module').then(m => m.BannersModule)
  },
  {
    path: 'e-commerce',
    loadChildren: () => import('./e-commerce/e-commerce.module').then(m => m.EcommerceModule)
  },
  {
    path: 'count-down',
    loadChildren: () => import('./count-down/count-down.module').then(m => m.CountDownModule)
  },
  {
    path: 'dynamic-div',
    loadChildren: () => import('./dynamic-div/dynamic-div.module').then(m => m.DynamicDivModule)
  },
  {
    path: 'table',
    loadChildren: () => import('./student-table/student-table.module').then(m => m.StudentTableModule)
  },
  {
    path: 'timer',
    loadChildren: () => import('./timer/timer.module').then(m => m.TimerModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
