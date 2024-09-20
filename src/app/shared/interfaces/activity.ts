export interface Activity{
    id?: number;
    title?: string;
    date_creation?: Date;
    state?: string;
    description?:string;
    deadline?:Date; //tiempo limite
    schedule?: number;
    priority?: string;
    number?: number;
    label?: string;
    text?: string;
    responsible_suject?: string;
    docs?: any;
    selection?:any;
    link?: string;
    id_user: number;
    id_project: number;
}