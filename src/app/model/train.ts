export interface Train {
}

export class Search {
    fromStationID: number;
     toStationID: number; 
     dateOfTravel: string;

     constructor(){
        this.fromStationID=0;
        this.toStationID=0;
        this.dateOfTravel='';
     }
}
