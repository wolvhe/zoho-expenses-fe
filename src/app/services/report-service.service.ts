import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportServiceService {

  baseURL = "https://codingmart-expenses.herokuapp.com/api"

  constructor(private http: HttpClient) { }

  createReport(data:any): Observable<any> {
    console.log(data);
    return this.http.post(`${this.baseURL}/reports/new`, data)
  }

  allReports:any
  getAllReports(email:string): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/reports/${email}`)
  }

  archieveReport(data:any): Observable<any> {
    return this.http.put<any>('${this.baseURL}/reports/edit', data)
  }

  deleteReport(email:string, reportName:string): Observable<any> {
    return this.http.delete<any>(`${this.baseURL}/reports/delete/${email}/${reportName}`)
  }

  importBulkReports(data:any): Observable<any> {
    console.log(data);
    return this.http.post<any>('${this.baseURL}/reports/bulkimport', data)
  }
  updateReport(data:any): Observable<any> {
    return this.http.put<any>(`${this.baseURL}/reports/edit`, data)
  }
}
