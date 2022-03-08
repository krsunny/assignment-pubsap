import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownRoutingModule } from './count-down-routing.module';
import { CountDownComponent } from './count-down.component';
import { CountTimerComponent } from './count-timer/count-timer.component';
import { TimerLimitComponent } from './timer-limit/timer-limit.component';
import { LogsComponent } from './logs/logs.component';
import { TrackComponent } from './track/track.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CountdownRoutingModule,
    FormsModule
  ],
  declarations: [CountDownComponent, CountTimerComponent, TimerLimitComponent, LogsComponent, TrackComponent]
})
export class CountDownModule { }
