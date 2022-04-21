import {User} from 'src/app/beans/User'
export class Customer extends User {
    constructor (public id?: number,
        public image?: string
       ){
        super();
    }
}
