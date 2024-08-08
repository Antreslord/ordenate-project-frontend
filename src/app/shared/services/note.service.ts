import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Note } from "../classes/note";

@Injectable({
    providedIn: 'root'
})

export class _NoteService {
    private myAppUrl:string
    private myApiUrl:string

    constructor(private http:HttpClient){
        this.myAppUrl = environment.endpoint
        this.myApiUrl = 'api/note/'
    }

    getListNotes():Observable<Note[]>{
        return this.http.get<Note[]>(`${this.myAppUrl}${this.myApiUrl}`)
    }

    getNote(id: number): Observable<Note>{
        return this.http.get<Note>(`${this.myAppUrl}${this.myApiUrl}${id}`)
    }

    saveNote(note:Note): Observable<void>{
        return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, note)
    }

    updateNote(id:number, note:Note): Observable<void>{
        return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, note)
    }

    deleteNote(id:number):Observable<void>{
        return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`)
    }
}