import { User } from "./user";

export class Project{
    private id: number;
    private title: string;
    private date_creation:Date;
    private analysis:string;
    private number_activities?:number;
    private id_user: number

    constructor(id:number, title:string, dateCreation:Date, analysis:string, numberActivities:number, id_user:number){
        this.id = id;
        this.title = title;
        this.date_creation = dateCreation;
        this.analysis = analysis;
        this.number_activities = numberActivities;
        this.id_user = id_user
    }

    
    //-------- METHODS -------- 
    
    addMember(member:User){

    }

    addManager(member:User){

    }

    createActivity(){
        
    }


    
    //-------- GETTERS and SETTERS --------
    get getId(){
        return this.id;
    }
    get getTitle(){
        return this.title;
    }
    get getDateCreation(){
        return this.date_creation
    } 
    get getAnalysis(){
        return this.analysis;
    }
    get getNumberActivities(){
        return this.number_activities;
    }
    get getIdUser(){
        return this.id_user
    }
    
    set setId(id: number) {
        this.id = id;
    }
    set setTitle(title: string) {
        this.title = title;
    }
    set setDateCreation(date:Date){
        this.date_creation = date;
    }
    set setAnalysis(analysis:string){
        this.analysis = analysis;
    }
    set setNumberActivities(number:number){
        this.number_activities = number;
    }
    set setIdUser(id:number){
        this.id_user = id
    }
    

}