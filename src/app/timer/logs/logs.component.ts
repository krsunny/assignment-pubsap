import { Component, OnInit } from '@angular/core';
import { CounterManagementService } from '../counter-management.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {

  allTimeLogs = [];
  constructor(public counterManagementService: CounterManagementService) {}

  ngOnInit() {
    this.counterManagementService.allTimeTimerState.subscribe((i) => {
      console.log(i);
      console.log(i + 'test');
      this.allTimeLogs = i;
    });
  }

}
