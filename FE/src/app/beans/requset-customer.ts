import { Technician } from "./technician";

export class RequsetCustomer {
    constructor (public id?: number,
        public CustomerName?: string,
        public phone?: string,
        public  email?: string,
        public problemDescription?: string,
        public deviceType?: string,
        public deviceName?: string,
        public  date?: Date,
        public  isComplete?: boolean,
        public  repairType?: string,
        public technician?: Technician,
        public  attach?: boolean,

       ){}
}
