import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private myAppUrl:string;
  private myApiUrl:string;

  constructor(private http:HttpClient) { 
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/users/';
  }

  getListUsers():Observable<User[]>{
    return this.http.get<User[]>(`${this.myAppUrl}${this.myApiUrl}`)
  }

  getUser(id:number):Observable<User>{
    return this.http.get<User>(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }

  saveUser(user:User):Observable<void>{
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`,user)
  }

  updateUser(id:number, user:User):Observable<void>{
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`,user)
  }
}
