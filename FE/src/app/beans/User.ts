import { CommonModule } from "@angular/common";
import { UserRole } from "../common-utils/classes/user-role";

export class User{
    public id?:number
    public userName?:string
    public userPassword?:string
    public socialId?: string
    public userPhone?: string
    public userAddress?: string
    public userRole?: string
    public email?: string
}