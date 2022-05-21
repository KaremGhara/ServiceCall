import { Customer } from "./customer";
import { Technician } from "./technician";

export class RequsetCustomer {
    constructor (public id?: number,
        public customerName?: string,
        public phone?: string,
        public  email?: string,
        public problemDescription?: string,
        public deviceType?: string,
        public deviceName?: string,
        public  date?: Date,
        public  complete?: boolean,
        public  repairType?: string,
        public technician?: Technician,
        public  attach?: boolean,
        public  answerdate?: string,
        public messageTech?: string


       ){}
}
