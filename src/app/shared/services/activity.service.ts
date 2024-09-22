import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Activity } from "../interfaces/activity";
import { _UserService } from "./user.service";
import { _ProjectService } from "./project.service";
import { User } from "../interfaces/user";
import { Project } from "../interfaces/project";

@Injectable({
    providedIn: 'root'
})

export class _ActivityService {

    private myAppUrl:string
    private myApiUrl:string

    private getActivityLocalStorage:any;
    private activityJSON;

    constructor(private http:HttpClient, private _userService: _UserService, private _projectService: _ProjectService){
        this.myAppUrl = environment.endpoint
        this.myApiUrl = 'api/activity/'

        this.getActivityLocalStorage = localStorage.getItem('activity')
        this.activityJSON = JSON.parse(this.getActivityLocalStorage)
    }

    getListActivities():Observable<Activity[]>{
        return this.http.get<Activity[]>(`${this.myAppUrl}${this.myApiUrl}`)
    }

    getListActivitiesByUserAndProject():Observable<Activity[]>{

        const user:User = this._userService.returnInfo()

        const project:Project = this._projectService.returnInfo()

        return this.http.get<Activity[]>(`${this.myAppUrl}${this.myApiUrl}activities/${user.id}/${project.id}`)
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