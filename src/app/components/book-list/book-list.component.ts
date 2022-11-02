import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list-grid.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: any;
  searchMode: boolean = false;
  addLibMessage = '';
  check!: string;

  constructor(private srv: BooksService, private router: Router, private route: ActivatedRoute, private libraryService: LibraryService) { }

  active(): boolean {
    if (localStorage.getItem('active') == "logged")
      return true;
    else
      return false;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listBooks();
    });
  }

  listBooks() {
    this.searchMode = this.route.snapshot.paramMap.has('keyword');
    if (this.searchMode == true) {
      this.handleSearchBooks();
    }
    else {
      this.handleListBooks();
    }
  }

  handleSearchBooks() {
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword')!;
    this.srv.searchBooks(theKeyword).subscribe(
      (response) => {
        this.books = response;
      }
    )
  }

  handleListBooks() {
    this.srv.getBookList().subscribe(
      (response) => {
        this.books = response;
      }
    );
  }

  addToLibrary(bookId: string) {
    this.libraryService.addToLibrary(localStorage.getItem('username')!, bookId).subscribe(() => {
      (response: string) => {
        this.addLibMessage = response;
      }
    })
    alert("Book successfully added to your library");
  }

  paymentCheck(bookId: string) {
    this.libraryService.checkLibrary(localStorage.getItem('username')!, bookId).subscribe(
      (response) => {
        if(response == "Exists") {
          alert("You already own the book !!!");
        }
        else {
          this.router.navigate([`/payment/${bookId}`]);
        }
      })
  }
}

