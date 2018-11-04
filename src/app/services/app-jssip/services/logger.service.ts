import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Call } from './ua.service/call';
import * as moment from 'moment';

@Injectable()
export class LoggerService {
  private _logs: string[] = [];
  public log: BehaviorSubject<string[]>;
  public call = new BehaviorSubject(new Call());
  constructor() { 
    this.log = new BehaviorSubject(this._logs);
  }

  addLog(log: string) {
    if(log === 'REJECTED' || log === 'ANSWERED' || log === 'HUNG UP')
      this._logs.push(log);
    else{
      this._logs.push(moment(moment.now()).format('YYYY-MM-DD h:mm:ss') + ' ' + log);
    }
    
    this._emit();
  }

  private _emit() {
    this.log.next(this._logs);
  }

  clearLog() {
    this._logs = [];
    this._emit();
  }
}
