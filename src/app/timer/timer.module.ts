import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerRoutingModule } from './timer-routing.module';
import { TimerComponent } from './timer.component';
import { CountTimerComponent } from './count-timer/count-timer.component';
import { LogsComponent } from './logs/logs.component';
import { TimerLimitComponent } from './timer-limit/timer-limit.component';
import { TrackComponent } from './track/track.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TimerRoutingModule,
    FormsModule
  ],
  declarations: [TimerComponent, CountTimerComponent, LogsComponent, TimerLimitComponent, TrackComponent]
})
export class TimerModule { }
