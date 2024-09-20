import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Activity } from "../interfaces/activity";

@Injectable({
    providedIn: 'root'
})

export class _ActivityService {

    private myAppUrl:string
    private myApiUrl:string

    constructor(private http:HttpClient){
        this.myAppUrl = environment.endpoint
        this.myApiUrl = 'api/activity/'
    }

    getListActivities():Observable<Activity[]>{
        return this.http.get<Activity[]>(`${this.myAppUrl}${this.myApiUrl}`)
    }

    getListActivitiesByUserAndProject(id_project:number):Observable<Activity[]>{
        const userStorage: any = localStorage.getItem('user')
        const userJSON = JSON.parse(userStorage)
        const userId:number = Number(userJSON.id)
        return this.http.get<Activity[]>(`${this.myAppUrl}${this.myApiUrl}activities/${userId}/${id_project}`)
    }

    getActivity(id: number):Observable<Activity>{
        return this.http.get<Activity>(`${this.myAppUrl}${this.myApiUrl}${id}`)
    }

    saveActivity(activity: Activity): Observable<void>{
        return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`,activity)
    }

    updateActivity(id: number, activity:Activity): Observable<void>{
        return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`,activity)
    }

    deleteActivity(id:number): Observable<void>{
        return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`)
    }

}