export class Activity{

    private id:string;
    private title:string;
    private description:string;
    private startDate: Date;
    private endDate: Date;
    private responsible: string;
    private state: string;
    private priority: string;

    constructor(id:string, title: string, description: string, startDate:Date, endDate:Date, responsible: string, state:string, priority:string){
        this.id = id;
        this.title = title;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.responsible = responsible;
        this.state = state;
        this.priority = priority;
    }

    //-------- GETTERS and SETTERS
    public get getId():string{
        return this.id;
    }
    public get getTitle():string{
        return this.title;
    }
    public get getDescription():string{
        return this.description;
    }
    public get getStartDate():Date{
        return this.startDate;
    }
    public get getEndDate():Date{
        return this.endDate;
    }
    public get getResponsible():string{
        return this.responsible;
    }
    public get getState():string{
        return this.state;
    }
    public get getPrority():string{
        return this.priority
    }

    public set setId(id:string){
        this.id = id;
    }
    public set setTitle(title:string){
        this.title = title;
    }
    public set setDescription(description:string){
        this.description = description;
    }
    public set setStartDate(startDate:Date){
        this.startDate = startDate;
    }
    public set setEndDate(endDate:Date){
        this.endDate = endDate;
    }
    public set setResponsible(responsible:string){
        this.responsible = responsible;
    }
    public set setState(state:string){
        this.state = state;
    }
    public set setPriority(priority:string){
        this.priority = priority;
    }
}