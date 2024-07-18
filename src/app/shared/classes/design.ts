export class Design{
    private id:string;
    private title:string;
    private img:any;
    private description?:string

    constructor(id:string, title:string, img:any, description?:string){
        this.id = id;
        this.title = title;
        this.img = img;
        if(description){
            this.description = description
        }
    }


    saveDesign(){

    }

    deleteDesign(){
        
    }


    //------ GETTERS and SETTERS

    public get getId():string{
        return this.id
    }
    public get getTitle():string{
        return this.title
    }
    public get getImg():any{
        return this.img
    }
    public get getDescription():any{
        return this.description
    }

    public set setTitle(title:string){
        this.title = title;
    }
    public set setImg(img:any){
        this.img = img;
    }
    public set setDescription(description:string){
        this.description = description
    }
}