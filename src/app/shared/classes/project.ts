import { User } from "./user";

export class Project{
    private id: string;
    private title: string;
    private dateCreation:Date;
    private analysis:string;
    private numberActivities:number = 0;

    constructor(id:string, title:string, dateCreation:Date, analysis:string, numberActivities:number){
        this.id = id;
        this.title = title;
        this.dateCreation = dateCreation;
        this.analysis = analysis;
        this.numberActivities = numberActivities
    }

    //-------- METHODS -------- 
    
    public addMember(member:User){

    }

    public addManager(member:User){

    }

    public createActivity(){
        
    }


    //-------- GETTERS and SETTERS --------
    public get getId(): string {
        return this.id;
    }
    public get getTitle(): string {
        return this.title;
    }
    public get getDateCreation():Date{
        return this.dateCreation
    } 
    public get getAnalysis():string{
        return this.analysis;
    }
    public get getNumberActivities():number{
        return this.numberActivities;
    }
    
    public set setId(id: string) {
        this.id = id;
    }
    public set setTitle(title: string) {
        this.title = title;
    }
    public set setDateCreation(date:Date){
        this.dateCreation = date;
    }
    public set setAnalysis(analysis:string){
        this.analysis = analysis;
    }
    public set setNumberActivities(number:number){
        this.numberActivities = number;
    }
}