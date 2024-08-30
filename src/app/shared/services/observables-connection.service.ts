import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class _ObservablesConnectionService {
  
  private booleanSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  private stringSubject: BehaviorSubject<string> = new BehaviorSubject<string>('')

  constructor() { }

  setBoolean(value:boolean){
    this.booleanSubject.next(value)
  }
  getBoolean(): Observable<boolean>{
    return this.booleanSubject.asObservable()
  }

  setString(value:string){
    this.stringSubject.next(value)
  }
  getString(){
    return this.stringSubject.asObservable()
  }

}
