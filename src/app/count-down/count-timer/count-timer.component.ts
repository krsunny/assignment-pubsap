import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-timer',
  templateUrl: './count-timer.component.html',
  styleUrls: ['./count-timer.component.scss']
})
export class CountTimerComponent implements OnInit {


  @Input() item=''
  constructor() { }

  ngOnInit(): void {
  }
  

}
