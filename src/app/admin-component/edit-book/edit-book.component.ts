import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  message = '';
  errMessage = '';
  editBookForm!: FormGroup;
  books: any;
  constructor(private srv: BooksService, private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.editBookForm = this.formBuilder.group({
      name: ['', Validators.required],
      author: ['', Validators.required],
      publisher: ['', Validators.required],
      genre: ['', Validators.required],
      description: ['', Validators.required],
      pages: ['', Validators.required],
      publishYear: ['', Validators.required],
      imageUrl: ['', Validators.required],
      price: ['', Validators.required]
    })

    const theBookId = this.route.snapshot.paramMap.get('bookid')!;
    this.srv.getBook(theBookId).subscribe(
      (response) => {
        this.books = response;
      }
    )
  }

  loadApiData() {
    this.editBookForm.patchValue({    //values to few form controls
      name: this.books.name,
      author: this.books.author,
      publisher: this.books.publisher,
      genre: this.books.genre,
      description: this.books.description,
      pages: this.books.pages,
      publishYear: this.books.publishYear,
      imageUrl: this.books.imageUrl,
      price: this.books.price,
    });
  }

  editBooks() {
    const theBookId = this.route.snapshot.paramMap.get('bookid')!;
    const formValue = this.editBookForm.value;
    this.srv.editBook(theBookId, formValue.name, formValue.author, formValue.publisher, formValue.genre, formValue.description, formValue.pages, formValue.publishYear, formValue.imageUrl, formValue.price).subscribe(
      (response) => {
        alert("Book edited successfully");
        this.router.navigate([`/admin/books`]);
      }
    )
  }
}
