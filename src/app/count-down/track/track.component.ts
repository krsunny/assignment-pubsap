import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {

  @Input() startcount:number = 0
  @Input() pausecount:number = 0



  constructor() { }

  ngOnInit(): void {
  }

}
