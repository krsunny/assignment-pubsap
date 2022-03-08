import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit {


  item: any = 1000;
  startcount: number = 0
  pausecount: number = 0
  time: any = [];



  constructor() { }

  updateItem(value: any) {
    this.item = value;
  }

  updatePauseCount(value: any) {
    this.pausecount = value;
  }

  updateStartCount(value: any) {
    this.startcount = value;
  }

  updateTime(value: any) {
    if (value === null) {
      this.time = [];
    }
    else {
      this.time.push(value);
    }
  }


  ngOnInit(): void {
  }

}
