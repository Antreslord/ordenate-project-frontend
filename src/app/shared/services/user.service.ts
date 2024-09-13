import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})

export class _UserService {

  private myAppUrl:string;
  private myApiUrl:string;

  constructor(private http:HttpClient) { 
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/user/';
  }

  //Metodo findUserByEmail
  findUserByEmail(email:string):Observable<User>{
    return this.http.get<User>(`${this.myAppUrl}${this.myApiUrl}${email}`)
  }

  //Metodo Sign In
  signIn(user:User): Observable<any>{
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`,user)
  }

  //Metodo login
  login(user:User):Observable<string>{
    return this.http.post<string>(`${this.myAppUrl}${this.myApiUrl}login`,user)
  }

  updateUser(id:number, user:User):Observable<void>{
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}`,user)
  }
}
