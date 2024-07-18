export class Note{
    private id:string;
    private title:string;
    private content:string;
    private priority:string

    constructor(id:string, title:string, content:string, priority:string){
        this.id = id;
        this.title = title;
        this.content = content;
        this.priority = priority;
    }

    saveNote(){

    }
    deleteNote(){
        
    }

    //-------- GETTERS and SETTERS
    public get getId():string{
        return this.id;
    }
    public get getTitle():string{
        return this.title;
    }
    public get getContent():string{
        return this.content;
    }
    public get getPriority():string{
        return this.priority
    }

    public set setTitle(title:string){
        this.title = title;
    }
    public set setContent(content:string){
        this.content = content;
    }
    public set setPriority(priority:string){
        this.priority = priority;
    }
}