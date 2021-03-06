import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Advancemodel } from '../models/advancemodel';
import { Tripmodel } from '../models/tripmodel';
const baseUrl = 'https://codingmart-expenses.herokuapp.com';
@Injectable({
  providedIn: 'root'
})
export class TripsService {
  baseUrl: any;

  constructor(private http: HttpClient) { }
  createtrip(data: any) {
    return this.http.post(baseUrl+'/api/trip', data,{responseType: 'text'});
  }
  getalltrip(data:any){
    return this.http.get<Tripmodel>(baseUrl+'/api/gettrip/'+data);
  } 
  deletetrip(email:string, tripName:string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/trips/delete/${email}/${tripName}`)
  }
  createadvance(data:any){
    return this.http.post(baseUrl+'/api/advance',data,{responseType:'text'});
  }
  getalladvance(data:any){
    return this.http.get<Advancemodel>(baseUrl+'/api/getadvance/'+data);
  }
}
