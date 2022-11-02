import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  message = '';
  errMessage = '';
  addBookForm! : FormGroup;
  constructor(private srv: BooksService, private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.addBookForm = this.formBuilder.group({
      bookId: ['', Validators.required],
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
  }

  addBook() {
    const formValue = this.addBookForm.value;
    this.srv.addBooks(formValue.bookId, formValue.name, formValue.author, formValue.publisher, formValue.genre, formValue.description, formValue.pages, formValue.publishYear, formValue.imageUrl, formValue.price).subscribe({
      next: (response: any) => {
        this.message = "Book added successfully";
        alert("Book added successfully");
        this.router.navigate([`/admin/books`]);
      }, error: (err) => {
        this.errMessage = "Something went wrong";
        alert("Something went wrong");
      }
    })
  }

}
