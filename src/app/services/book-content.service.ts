import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookContentService {

  // private contentUrl = "http://localhost:8500/bookstore/content";
  private contentUrl = "http://localhost:8400/bookstore/content";

  constructor(private http: HttpClient) { }

  getContent(bookId: string) {
    const getContentUrl = `${this.contentUrl}/get/${bookId}`;
    return this.http.get(getContentUrl).pipe(
      map(res=>res)
    )
  }

  addContent(bookId: string, synopsis: string) {
    const addContentUrl = `${this.contentUrl}/add`;
    return this.http.post(addContentUrl, {bookId, synopsis});
  }

  deleteContent(bookId: string) {
    const delContentUrl = `${this.contentUrl}/delete/${bookId}`;
    return this.http.delete(delContentUrl, {responseType: 'text'});
  }

  updateContent(bookId: string, synopsis: string) {
    const updateContentUrl = `${this.contentUrl}/update/${bookId}`;
    return this.http.put(updateContentUrl, {bookId, synopsis}, {responseType: 'text'});
  }
}
