import { Component, OnInit } from '@angular/core';
import { CounterManagementService } from '../counter-management.service';

@Component({
  selector: 'app-timer-limit',
  templateUrl: './timer-limit.component.html',
  styleUrls: ['./timer-limit.component.scss']
})
export class TimerLimitComponent implements OnInit {

  constructor(public counterManagementService: CounterManagementService) {}

  currentCounterLogs = [];
  time:any

  ngOnInit() {
    this.reset();

    this.counterManagementService.time.subscribe((i:any)=>{
      this.time = i
    })

    this.counterManagementService.currentTimerState.subscribe((i) => {
      // console.log('hererere');
      this.currentCounterLogs = i;
    });
  }
  changeTimerState() {
    // console.log('test');
    this.counterManagementService.startPauseTimer();
  }

  reset() {
    // console.log(this.timer);
    // if (!this.timer) {
    //   this.timer = 1000;
    // }
    this.counterManagementService.resetTimerNow();
  }

}
