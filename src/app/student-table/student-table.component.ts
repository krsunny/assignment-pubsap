import { Component, Directive, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';

interface Student {
  id: number;
  name: string;
  class: number;
  section: string;
  sub1: number;
  sub2: number;
  sub3: number;
}

const STUDENTS: Student[] = [
  {
    id: 1,
    name: 'asfd',
    class: 3,
    section: 'D',
    sub1: 23,
    sub2:54,
    sub3: 65
  },
  {
    id: 1,
    name: 'asdf',
    class: 3,
    section: 'E',
    sub1: 23,
    sub2:45,
    sub3: 67
  },
  {
    id: 1,
    name: 'asdf',
    class: 3,
    section: 'F',
    sub1: 26,
    sub2:34,
    sub3: 45
  },
  {
    id: 1,
    name: 'asfd',
    class: 3,
    section: 'A',
    sub1: 34,
    sub2:34,
    sub3: 71
  },
];

export type SortColumn = keyof Student | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: {[key: string]: SortDirection} = { 'asc': 'desc', 'desc': '', '': 'asc' };

const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

export interface SortEvent {
  column: SortColumn;
  direction: SortDirection;
}

@Directive({
  selector: 'th[sortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()'
  }
})

export class NgbdSortableHeader {

  @Input() sortable: SortColumn = '';
  @Input() direction: SortDirection = '';
  @Output() sort = new EventEmitter<SortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({column: this.sortable, direction: this.direction});
  }
}

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {

  constructor() { }
  students = STUDENTS;

  @ViewChildren(NgbdSortableHeader)
  headers!: QueryList<NgbdSortableHeader>;

  onSort({column, direction}: SortEvent) {

    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting countries
    if (direction === '' || column === '') {
      this.students = STUDENTS;
    } else {
      this.students = [...STUDENTS].sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }

  ngOnInit(): void {
  }

}
