import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-book-genre',
  templateUrl: './book-genre.component.html',
  styleUrls: ['./book-genre.component.css']
})
export class BookGenreComponent implements OnInit {

  books: any;
  currentGenre: string = "Action";
  addLibMessage = '';

  active(): boolean {
    if (localStorage.getItem('active') == "logged")
      return true;
    else
      return false;
  }
  
  constructor(private srv: BooksService,private router: Router, private route: ActivatedRoute, private libraryService: LibraryService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listBooksByGenre();
    })
  }
  listBooksByGenre() {

    const hasGenreId: boolean = this.route.snapshot.paramMap.has('id');
    if(hasGenreId==true) {
      this.currentGenre = this.route.snapshot.paramMap.get('id')!;
    }
    else {
      this.currentGenre = "Action";
    }

    this.srv.getBookByGenre(this.currentGenre).subscribe(
      (response) => {
        this.books = response;
      }
    );
  }

  addToLibrary(bookId: string) {
    // need to check if already present
    this.libraryService.addToLibrary(localStorage.getItem('username')!, bookId).subscribe(()=> {
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