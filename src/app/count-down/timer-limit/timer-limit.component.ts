import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-timer-limit',
  templateUrl: './timer-limit.component.html',
  styleUrls: ['./timer-limit.component.scss']
})
export class TimerLimitComponent implements OnInit {
  item: any
  startcount: number = 0;
  pausecount: number = 0;
  time: any;

  @Output() public updateItem: any = new EventEmitter();
  @Output() public updateStartCount: any = new EventEmitter();
  @Output() public updatePauseCount: any = new EventEmitter();
  @Output() public updateTime: any = new EventEmitter();




  interval: any;
  left: any = [];
  date = new Date();

  constructor() { }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.item > 0) {
        this.item--;
      } else {
        this.item;
      }
      this.updateItem.emit(this.item)
    }, 1000);
    this.updateStartCount.emit(this.startcount + 1)
    this.updateTime.emit('Started at' + ' '+ new Date().toLocaleString());
    console.log(this.date)
    console.log(this.startcount++);

  }

  pauseTimer() {
    clearInterval(this.interval);
    this.left.push(this.item);
    this.updateItem.emit(this.item);
    this.updatePauseCount.emit(this.pausecount + 1);
    this.updateTime.emit('Paused At' +' '+ new Date().toLocaleString());
    console.log(this.pausecount++);
    console.log(this.item);
    console.log(this.date);
  }
  resetTimer() {
    clearInterval(this.interval);
    this.item = 0;
    this.left = [];
    this.updateItem.emit(this.item)
    this.startcount = 0;
    this.pausecount = 0;
    this.updateTime.emit(null)
    this.updatePauseCount.emit(0);
    this.updateStartCount.emit(0);


  }

 
  ngOnInit(): void {
  }

}
