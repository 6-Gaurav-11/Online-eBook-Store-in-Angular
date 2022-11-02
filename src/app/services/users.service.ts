import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // private url = "http://localhost:8200/bookstore/users";
  private url = "http://localhost:8400/bookstore/users";

  constructor(private http: HttpClient) { }

  getAllUsers() {
    const getUserUrl = `${this.url}/getall`;
    return this.http.get(getUserUrl).pipe(
      map(res => res))
  }

  getUser(username: string) {
    const userUrl = `${this.url}/get/${username}`;
    return this.http.get(userUrl).pipe(
      map(res => res))
  }

  updateUser(username: string, fullName: string, email: string, password: string): Observable<any> {
    const updateUrl = `${this.url}/update/${username}`;
    return this.http.put(updateUrl, { fullName, email, password }, {responseType: 'text'});
  }

  deleteUser(username: string) {
    const deleteUrl = `${this.url}/delete/${username}`;
    return this.http.delete(deleteUrl, {responseType: 'text'});
  }
}
