// src/app/services/user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../app/user.model';
import { LoginRequest } from '../app/login-request.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:9003/users';  // Adjust based on your backend URL

  constructor(private http: HttpClient) { }

  registerUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/register`, user);
  }

  getUserById(userID: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${userID}`);
  }

  login(loginRequest: LoginRequest): Observable<string> {
    return this.http.post(`${this.baseUrl}/login`, loginRequest, { responseType: 'text' });
  }
}
