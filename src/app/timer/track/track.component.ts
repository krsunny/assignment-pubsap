import { Component, OnInit } from '@angular/core';
import { CounterManagementService } from '../counter-management.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {
  counterTracker = {
    startCounter: 0,
    pauseCounter: 0,
    resetCounter: 0,
  };

  constructor(public counterManagementService: CounterManagementService) {}

  ngOnInit() {
    this.counterManagementService.counterState.subscribe((i) => {
      this.counterTracker = i;
    });
  }

}
