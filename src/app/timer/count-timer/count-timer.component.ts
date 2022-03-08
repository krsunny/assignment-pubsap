import { Component, OnInit } from '@angular/core';
import { CounterManagementService } from '../counter-management.service';

@Component({
  selector: 'app-count-timer',
  templateUrl: './count-timer.component.html',
  styleUrls: ['./count-timer.component.scss']
})
export class CountTimerComponent implements OnInit {

  timer = 1000;
  intervalProp: any;

  constructor(public counterManagementService: CounterManagementService) {}

  ngOnInit() {
    this.counterManagementService.timerState.subscribe((i:any) => {
      // console.log(i);
      if (i == false) {
        this.stopTimer();
      } else if (i == true) {
        this.runTimer();
      }
      // this.counterManagementService.updateCurrentTimerState(this.timer);
    });

    this.counterManagementService.resetTimer.subscribe((timer: any) => {
      this.resetTimer(timer);
    });
  }

  runTimer() {
    this.intervalProp = setInterval((i:any) => {
      // console.log('qqq');
      this.timer = this.timer - 1;
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.intervalProp);
  }

  resetTimer(timer: any) {
    this.stopTimer();
    this.timer = timer;
    this.counterManagementService.timerStateBool = false;
  }

}
