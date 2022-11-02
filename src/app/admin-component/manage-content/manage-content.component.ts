import { Component, OnInit } from '@angular/core';
import { BookContentService } from 'src/app/services/book-content.service';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-manage-content',
  templateUrl: './manage-content.component.html',
  styleUrls: ['./manage-content.component.css']
})
export class ManageContentComponent implements OnInit {

  books: any;
  
  constructor(private contentsrv: BookContentService, private booksrv: BooksService) { }

  ngOnInit(): void {
    this.listBooks();
  }

  listBooks() {
    this.booksrv.getBookList().subscribe(
      (response) => {
        this.books = response;
      }
    );
  }
  
  deleteContent(bookId: string) {
    if(confirm("Do you want to delete the contents of this book ?")) {
      this.booksrv.deleteBook(bookId).subscribe(
        (response) => {

        }
      )
    }
  }

}
