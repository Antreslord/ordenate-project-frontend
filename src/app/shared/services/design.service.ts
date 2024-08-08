import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Design } from "../classes/design";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class _DesignService {
    private myAppUrl:string
    private myApiUrl:string

    constructor(private http: HttpClient){
        this.myAppUrl = environment.endpoint
        this.myApiUrl = 'api/design/'
    }

    getListDesigns():Observable<Design[]>{
        return this.http.get<Design[]>(`${this.myAppUrl}${this.myApiUrl}`)
    }

    getDesign(id:number):Observable<Design>{
        return this.http.get<Design>(`${this.myAppUrl}${this.myApiUrl}`)
    }

    saveDesign(design: Design): Observable<void>{
        return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`,design)
    }

    updateDesign(id: number, design:Design): Observable<void>{
        return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, design)
    }

    deleteDesgin(id:number): Observable<void>{
        return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`)
    }
}