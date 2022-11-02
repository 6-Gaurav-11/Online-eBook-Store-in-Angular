import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  books: any;
  addLibMessage = '';
  orderMessage = '';
  constructor(private srv: BooksService, private router: Router, private route: ActivatedRoute, private libraryService: LibraryService) { }

  active(): boolean {
    if (localStorage.getItem('active') == "logged")
      return true;
    else
      return false;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleBookDetails();
    });
  }

  handleBookDetails() {
    const theBookId = this.route.snapshot.paramMap.get('id')!;
    this.srv.getBook(theBookId).subscribe(
      (response) => {
        this.books = response;
      }
    )
  }

  addToLibrary(bookId: string) {
    // need to check if already present
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
        if (response == "Exists") {
          alert("You already own the book !!!");
        }
        else {
          this.router.navigate([`/payment/${bookId}`]);
        }
      })
  }

}
