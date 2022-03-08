import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CounterManagementService {

  private timerStateSource = new BehaviorSubject<any>('');
  timerState = this.timerStateSource.asObservable();

  private resetTimerSource = new BehaviorSubject<any>('');
  resetTimer = this.resetTimerSource.asObservable();

  private currentTimerStateSource = new BehaviorSubject<any>([]);
  currentTimerState = this.currentTimerStateSource.asObservable();

  private allTimeTimerStatesSource = new BehaviorSubject<any>([]);
  allTimeTimerState = this.allTimeTimerStatesSource.asObservable();

  private timervalue = new BehaviorSubject<any>([]);
  time = this.timervalue.asObservable();

  counterTracker = {
    startCounter: 0,
    pauseCounter: 0,
    resetCounter: 0,
  };

  private counterSource = new BehaviorSubject<any>(this.counterTracker);
  counterState = this.counterSource.asObservable();

  currentTimerStates = [];

  allTimeTimerStates = [];

  timerStateBool = false;

  counter = 0;
  timer:any = 1000;

  constructor() {}

  startPauseTimer() {
    // console.log('test here');
    this.timerStateBool = !this.timerStateBool;
    this.timerStateSource.next(this.timerStateBool);
    this.updateCurrentTimerState();
  }

  updateCurrentTimerState() {
    console.log(this.timerStateBool);
    this.counter = this.counter + 1;
    if (this.timerStateBool) {
      this.counterTracker.startCounter = this.counterTracker.startCounter + 1;
      console.log('timer true');
      // this.currentTimerStates.push('started at ' + timer as never);
      this.allTimeTimerStates.push('Started at ' + new Date().toISOString() as never);
    } else {
      this.counterTracker.pauseCounter = this.counterTracker.pauseCounter + 1;
      this.counterTracker.resetCounter = this.counterTracker.resetCounter + 1;
      console.log('timer false');
      this.currentTimerStates.push('paused at ' + this.timer as never);
      this.allTimeTimerStates.push('Paused at ' + new Date().toISOString() as never);
    }
    this.currentTimerStateSource.next(this.currentTimerStates);
    this.allTimeTimerStatesSource.next(this.allTimeTimerStates);
    this.counterSource.next(this.counterTracker);
  }

  resetTimerNow() {
    console.log('23123');

    this.counterTracker.resetCounter = this.counterTracker.resetCounter + 1;
    this.counter = this.counter + 1;
    this.resetTimerSource.next(this.timer);
    this.currentTimerStates = [];
    // this.allTimeTimerStates.push('Reset at ' + new Date().toISOString() as never);
    console.log(this.counter);
    if (this.counter == 2) {
      this.allTimeTimerStates = [];
      this.counterTracker = {
        startCounter: 0,
        pauseCounter: 0,
        resetCounter: 0,
      };
    }
    this.currentTimerStateSource.next(this.currentTimerStates);
    this.allTimeTimerStatesSource.next(this.allTimeTimerStates);
    this.counterSource.next(this.counterTracker);
  }
}
