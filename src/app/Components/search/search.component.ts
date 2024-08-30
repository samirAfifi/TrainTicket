import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrainService } from './../../service/train.service';





@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchData:any={};
  trainList:any;
  stationList:any;

  constructor(private _ActivatedRoute: ActivatedRoute, private _TrainService: TrainService) {
    this._ActivatedRoute.params.subscribe((params: any = {}) => {
      this.searchData = {
        ...params,  
        fromStationId: params.fromStationId,
        toStationId: params.toStationId,
        dateofTravel: params.dateofTravel
      };
    });
  }

  ngOnInit(): void {
    this.getSearchTrain();
    this.getAlltickets()
  }
  getSearchTrain(){
    this._TrainService.getTrainsSearch(this.searchData.formStationId,this.searchData.toStationId,this.searchData.dateofTravel).subscribe((data)=>{
     console.log(data.data);
     this.trainList=data.data
     
    })
  }

  getAlltickets(){
    this._TrainService.getTrains().subscribe((data)=>{
      this.stationList = data.data
    })
  }

 }
