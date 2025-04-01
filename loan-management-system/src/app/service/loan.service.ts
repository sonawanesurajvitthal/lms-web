import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  private apiUrl = 'http://localhost:8080/api/v1/loans';


  constructor(private http: HttpClient) { }


  getAllLoans(): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  applyLoan(data: any): Observable<any>{
    return this.http.post(`${this.apiUrl}`, data);
  }

}
