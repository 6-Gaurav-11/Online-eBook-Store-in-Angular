import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Books } from '../common/books';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  // private libraryUrl = "http://localhost:8300/bookstore/library";
  private libraryUrl = "http://localhost:8400/bookstore/library";

  book: any;
  constructor(private http: HttpClient) { }

  getLibrary(username: string) {
    const getLibUrl = `${this.libraryUrl}/show/${username}`;
    return this.http.get(getLibUrl).pipe(
      map(res => res)
    );
  }

  addToLibrary(username: string, bookId: string) {
    let id: string = username + bookId;
    const addLibUrl = `${this.libraryUrl}/save`;
    return this.http.post(addLibUrl, {id, username, bookId}, {responseType: 'text'});
  }

  removeFromLibrary(username: string, bookId: string) {
    const removeLibUrl = `${this.libraryUrl}/remove/${username}/${bookId}`;
    return this.http.delete(removeLibUrl, {responseType: 'text'});
  }

  checkLibrary(username: string, bookId: string) {
    const checkLiburl = `${this.libraryUrl}/check/${username}/${bookId}`;
    return this.http.get(checkLiburl, {responseType: 'text'});
  }

}
