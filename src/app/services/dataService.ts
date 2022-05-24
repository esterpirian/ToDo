import { Component} from '@angular/core'
import {BrowserModule } from '@angular/platform-browser'

import { Observable,BehaviorSubject } from 'rxjs'

export class SharedService {
    listeners = [];
   // _value: any;
  _value = {};
  _dataValue: any = {};
 
 
  constructor() {
  
  }
  getVal(key: string): BehaviorSubject<any> {
    return  this._dataValue[key];
  }
  setValue(key: string, value: any) {
  
    if (!this._dataValue[key]) {
      this._dataValue[key] = new BehaviorSubject<any>(value);
    }
    else {
      this.getVal(key).next(value);
    }
   
  }
   getData(key: string): Observable<any>{
  
    if (!this._dataValue[key]) {
      this._dataValue[key] = new BehaviorSubject<any>({ "anyVal": "start" });
     // this.getVal(key).next();
      
      }
    return  this._dataValue[key].asObservable();
  
  }
 
    
}
