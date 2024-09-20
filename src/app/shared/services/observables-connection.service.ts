import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class _ObservablesConnectionService {
  
  private stringSubject: BehaviorSubject<string> = new BehaviorSubject<string>('')
  private valuesStringAndBoolean:BehaviorSubject<Object> = new BehaviorSubject({})
  private numberSubject:BehaviorSubject<number> = new BehaviorSubject(0)

  constructor() { }

  setObject(name:string, value:boolean){
    this.valuesStringAndBoolean.next({
      nameItem: name,
      valueItem: value
    })
  }
  getObject(): Observable<Object>{
    return this.valuesStringAndBoolean.asObservable()
  }

  setString(value:string){
    this.stringSubject.next(value)
  }
  getString(): Observable<string>{
    return this.stringSubject.asObservable()
  }

  getNumber(): Observable<number>{
    return this.numberSubject.asObservable()
  }
  setNumber(value:number){
    this.numberSubject.next(value)
  }

}
