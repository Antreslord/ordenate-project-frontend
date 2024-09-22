import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Project } from "src/app/shared/interfaces/project";
import { _UserService } from "./user.service";
import { User } from "../interfaces/user";


 @Injectable({
    providedIn: 'root'
 })

 export class _ProjectService {

    private myAppUrl: string
    private myApiUrl: string

    private getProjectLocalStorage:any;
    private projectJSON;

    constructor(private http:HttpClient, private _userService:_UserService){
        this.myAppUrl = environment.endpoint;
        this.myApiUrl = 'api/project/';

        this.getProjectLocalStorage = localStorage.getItem('project')
        this.projectJSON = JSON.parse(this.getProjectLocalStorage)
    }

    setProjectInLocalStorage(project: Project){
        const auxProject = JSON.stringify(project)
        localStorage.setItem('project', auxProject)
    }

    returnInfo(){
        return this.projectJSON
    }

    getListProjects(): Observable<Project[]>{
        return this.http.get<Project[]>(`${this.myAppUrl}${this.myApiUrl}`)
    }

    getListProjectsByUserId(): Observable<Project[]>{
        const user:User = this._userService.returnInfo()
        return this.http.get<Project[]>(`${this.myAppUrl}${this.myApiUrl}find_projects/${user.id}`)
    }

    getProject(id: number):Observable<Project>{
        return this.http.get<Project>(`${this.myAppUrl}${this.myApiUrl}${id}`)
    }

    saveProject(project: Project): Observable<void>{
        return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, project)
    }

    updateProject(id:number, project:Project): Observable<void>{
        return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`,project)
    }

    deleteProject(id:number): Observable<void>{
        return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`)
    }

 }