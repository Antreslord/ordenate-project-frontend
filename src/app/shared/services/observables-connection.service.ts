import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservablesConnectionService {
  
  private booleanSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor() { }

  setBoolean(value:boolean){
    this.booleanSubject.next(value)
  }

  getBoolean(): Observable<boolean>{
    return this.booleanSubject.asObservable()
  }
}
