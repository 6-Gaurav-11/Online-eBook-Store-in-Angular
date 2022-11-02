import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  books: any;
  deleteMessage = '';
  getErrMessage = ''
  deleteErrMessage = '';

  constructor(private srv: LibraryService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.srv.getLibrary(localStorage.getItem('username')!).subscribe(
      (response) => {
        this.books = response;
      })
  }

  getLibraryBooks() {
    this.srv.getLibrary(localStorage.getItem('username')!).subscribe(
      (response) => {
        this.books = response;
      })
    }

  removeBookFromLibrary(bookId: string) {
    if (confirm("Do you want to remove this book from your library ?")) {
      this.srv.removeFromLibrary(localStorage.getItem('username')!, bookId).subscribe({
        next: (response) => {
          this.ngOnInit();
        }, error: (err) => {
          this.getErrMessage = err;
        }
     })
    }
    else {
      this.router.navigate([`/library`]);
    }
    
  }

}
