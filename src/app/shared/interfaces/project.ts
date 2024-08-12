export interface Project{
    id: number;
    title: string;
    date_creation:Date;
    analysis:string;
    number_activities?:number;
    id_user: number
}