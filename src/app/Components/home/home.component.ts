import { Component,  OnInit } from '@angular/core';
import { TrainService } from './../../service/train.service';
import { Router } from '@angular/router';
Router




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  stationList:any;
  toStationID:any;
  formStationID:any;
  dateOfTravel:any

 constructor(private _TrainService:TrainService,
    private _Router:Router
  ) { }


  ngOnInit(): void {
    this.getAlltickets()
    
      
    }
    getAlltickets(){
      this._TrainService.getTrains().subscribe((data)=>{
        console.log(data.data);
        this.stationList = data.data
      })
    }
    onSearch(){
      if(this.toStationID==0 || this.formStationID==0 || this.dateOfTravel==''){
        alert("Please select all fields")
      }else{
        if(this.toStationID==this.formStationID){
          alert("Please select different stations")
        }else{
          this._Router.navigate(['/search',this.formStationID,this.toStationID,this.dateOfTravel])
          console.log(this.formStationID,this.toStationID,this.dateOfTravel);
          
        }

      }
    }
   
    
   
    
  }
 
   
   
  

