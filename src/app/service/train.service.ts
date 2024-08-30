import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TrainService {
 

  constructor(private _HttpClient: HttpClient) { }

  getTrains():Observable<any> {
    return this._HttpClient.get('https://freeapi.miniprojectideas.com/api/TrainApp/GetAllStations');
  }
 
  getTrainsSearch(fromStationId: number, toStationId: number, dateOfTravel: string): Observable<any> {
    const url = `https://freeapi.miniprojectideas.com/api/TrainApp/GetTrainsBetweenStations?departureStationId=${fromStationId}&arrivalStationId=${toStationId}&departureDate=${dateOfTravel}`;
    
    return this._HttpClient.get(url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    console.error('An error occurred:', error.message);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }

  getNewCustomer(obj:any):Observable<any> {
    return this._HttpClient.post('https://freeapi.miniprojectideas.com/api/TrainApp/AddUpdatePassengers',obj);
  }
  getLoginCustomer(obj:any):Observable<any> {
    return this._HttpClient.post('https://freeapi.miniprojectideas.com/api/TrainApp/Login',obj);
  }
}


