export class User{
    private id: string;
    private name:string;
    private profession:string;
    private email:string;
    private password?:string;
    private photoUser?:string;
    private appeareance:boolean = true;


    constructor(id:string, name:string, profession:string, email:string, password?:string, photoUser?:string){
        this.id = id;
        this.name = name;
        this.profession = profession;
        this.email = email;
        if(password && photoUser){
            this.password = password
            this.photoUser = photoUser
        }
        
    }

    //-------- METHODS --------

    createProject(){

    }

    deleteProject(project:any){

    }

    updateUser(id:number, user:User){

    }

    saveUser(){
        
    }

    //-------- GETTERS and SETTERS -------
    
    public get getId(): string {
        return this.id;
    }
    public get getName():string{
        return this.name;
    }
    public get getProfession():string{
        return this.profession;
    }
    public get getEmail():string{
        return this.email;
    } 
    public get getPassword():any{
        return this.password;
    }
    public get getPhotoUser():any{
        return this.photoUser
    }


    public set setId(id: string) {
        this.id = id;
    }
    public set setName(name:string){
        this.name = name
    }
    public set setProfession(profession:string){
        this.profession = profession;
    }
    public set setEmail(email:string){
        this.email = email
    }
    public set setPassword(password:string){
        this.password = password
    }
    public set setPhotoUser(photoUser:string){
        this.photoUser = photoUser
    }
    public set setAppeareance(appeareance:boolean){
        this.appeareance = appeareance
    }
}