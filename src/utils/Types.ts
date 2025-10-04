export interface User {
    id?:number;
    username : string;
    email: string;
    permissions?: string[];
}