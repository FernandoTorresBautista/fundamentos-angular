import {LoggerService} from './logger.service';
import { Injectable } from '@angular/core';

@Injectable()
export class GreetenService {
  public counter = 0;
  constructor(private logger:LoggerService){
  }

  handleGreeting(msg:string){
    this.counter++;
    this.logger.log(msg);
  }
}