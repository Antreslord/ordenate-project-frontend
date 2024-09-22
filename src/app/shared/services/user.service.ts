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
  private getUser:any;
  private userJSON;

  constructor(private http:HttpClient) { 
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/user/';

    this.getUser = localStorage.getItem('user')
    this.userJSON = JSON.parse(this.getUser)
  }

  //Añadir un Usuario a Local Storage
  addUserLocalStorage(user:User){
    localStorage.setItem('user',JSON.stringify(user))
  }

  //retornar el id de usuario.
  returnInfo(){

    //const { id, name, lastname, profession, photo_user, email, apareance } = this.userJSON
    
    return this.userJSON
  }

  //Metodo findUserByEmail
  findUserByEmail(email:string):Observable<User>{
    return this.http.get<User>(`${this.myAppUrl}${this.myApiUrl}email/${email}`)
  }

  //Metodo Sign In
  signIn(user:User): Observable<any>{
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`,user)
  }

  //Metodo login
  login(user:User):Observable<string>{
    return this.http.post<string>(`${this.myAppUrl}${this.myApiUrl}login`,user)
  }

  //Metodo Actualizar Usuario
  updateUser(id:number, user:User):Observable<void>{
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`,user)
  }
}
