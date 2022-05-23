import {User} from 'src/app/beans/User'
export class Technician extends User{
    constructor (public id?: number,
        public  jobRole?: string,
       ){
        super();
    }
}
