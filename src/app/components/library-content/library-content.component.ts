import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookContentService } from 'src/app/services/book-content.service';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-library-content',
  templateUrl: './library-content.component.html',
  styleUrls: ['./library-content.component.css']
})
export class LibraryContentComponent implements OnInit {

  content: any;
  constructor(private srv: BookContentService, private bookSrv: BooksService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.getContentBook();
    })
  }

  getContentBook() {
    const theBookId = this.route.snapshot.paramMap.get('bookid')!;
    this.srv.getContent(theBookId).subscribe(
      (response) => {
        this.content = response;
      }
    )
  }

}
