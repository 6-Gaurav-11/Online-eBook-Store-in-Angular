import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-manage-books',
  templateUrl: './manage-books.component.html',
  styleUrls: ['./manage-books.component.css']
})
export class ManageBooksComponent implements OnInit {

  books: any;
  message = '';
  errMessage = '';
  constructor(private srv: BooksService, private router: Router) { }

  ngOnInit(): void {
    this.listBooks();
  }

  listBooks() {
    this.srv.getBookList().subscribe(
      (response) => {
        this.books = response;
      }
    );
  }

  deleteBook(bookId: string) {
    if (confirm("Do you want to delete this book ?")){
    this.srv.deleteBook(bookId).subscribe({
      next: (response: any) => {
        this.message = "Book edited successfully";
        this.ngOnInit();
      }, error: (err) => {
        this.errMessage = "Something went wrong";
      }
    })
  }
}

}
