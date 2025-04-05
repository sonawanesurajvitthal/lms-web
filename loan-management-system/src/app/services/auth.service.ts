import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8888/user/login';
  http:HttpClient = inject(HttpClient)

  constructor() { }

  login(crediantial:{username:string, password:string}): Observable<any>{
    return this.http.post<any>(this.apiUrl, crediantial);
  }

  saveToken(token: string): void {
    localStorage.setItem('jwtToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  logout(): void {
    localStorage.removeItem('jwtToken');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

}
