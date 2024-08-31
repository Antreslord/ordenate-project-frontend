import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class _ObservablesConnectionService {
  
  private booleanSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  private stringSubject: BehaviorSubject<string> = new BehaviorSubject<string>('')
  private valuesStringAndBoolean:BehaviorSubject<Object> = new BehaviorSubject({})

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

  setBoolean(value:boolean){
    this.booleanSubject.next(value)
  }
  getBoolean(): Observable<boolean>{
    return this.booleanSubject.asObservable()
  }

  setString(value:string){
    this.stringSubject.next(value)
  }
  getString(): Observable<string>{
    return this.stringSubject.asObservable()
  }

}
