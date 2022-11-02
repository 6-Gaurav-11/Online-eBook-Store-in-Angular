import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private registerUrl = "http://localhost:8400/bookstore/auth/signup"
  constructor(private http: HttpClient) { }

  register(username: string, fullName: string, email: string, password: string) {
    return this.http.post(this.registerUrl, {username, fullName, email, password});
  }
}
