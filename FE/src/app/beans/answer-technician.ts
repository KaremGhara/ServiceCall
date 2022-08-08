export class AnswerTechnician {
    constructor (public id?: number,
        public repairCode?: number,
        public repairInfo?: string,//repairType
        public  answerdate?: string,    
        public  date?: Date,
        public  complete?: boolean,
       ){}
}
