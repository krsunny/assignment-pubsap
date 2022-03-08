import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-div',
  templateUrl: './dynamic-div.component.html',
  styleUrls: ['./dynamic-div.component.scss']
})
export class DynamicDivComponent implements OnInit {

  constructor() { }

  dataSource: any = [];
  onAddData() {
    this.dataSource.push(this.dataSource.length);
  }
  onsubmit(i: any) {
    alert('Button in ' + this.ordinal_suffix_of(i) + ' div clicked');
  }
  ngOnInit(): void {
  }

  ordinal_suffix_of(i: any) {
    var j = i % 10,
      k = i % 100;
    if (j == 1 && k != 11) {
      return i + "st";
    }
    if (j == 2 && k != 12) {
      return i + "nd";
    }
    if (j == 3 && k != 13) {
      return i + "rd";
    }
    return i + "th";
  }

}
