import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  // private url = "http://localhost:8100/bookstore/books/get";
  private url = "http://localhost:8400/bookstore/books/get";

  constructor(private http: HttpClient) { }

  getBookByGenre(currentGenre: string) {
    const searchGenreUrl = `${this.url}/genre/${currentGenre}`;
    return this.http.get(searchGenreUrl).pipe(
      map(res => res))
  }

  getBookList() {
    return this.http.get(this.url).pipe(
      map(res => res))
  }

  searchBooks(keyword: string) {
    const searchUrl = `${this.url}/name/${keyword}`;
    return this.http.get(searchUrl).pipe(
      map(res => res))
  }

  getBook(theBookId: string) {
    const bookIdUrl = `${this.url}/${theBookId}`;
    return this.http.get(bookIdUrl).pipe(
      map(res => res))
  }

  editBook(bookId: string, name: string, author: string, publisher: string, genre: string,
    description: string, pages: number, publishYear: number, imageUrl: string, price: number) {
      const editUrl = `http://localhost:8100/bookstore/books/update/${bookId}`;
      return this.http.put(editUrl, {name, author, publisher, genre,
        description, pages, publishYear, imageUrl, price}, {responseType: 'text'});
    }

    deleteBook(bookId: string) {
      const deleteUrl = `http://localhost:8100/bookstore/books/delete/${bookId}`;
      return this.http.delete(deleteUrl, {responseType: 'text'});
    }

    addBooks(bookId: string, name: string, author: string, publisher: string, genre: string,
      description: string, pages: number, publishYear: number, imageUrl: string, price: number) {
        const addBookUrl = `http://localhost:8100/bookstore/books/add`;
        return this.http.post(addBookUrl, {bookId, name, author, publisher, genre,
          description, pages, publishYear, imageUrl, price});
      }

}
