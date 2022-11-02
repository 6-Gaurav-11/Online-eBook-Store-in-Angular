import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookContentService } from 'src/app/services/book-content.service';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.css']
})
export class AddContentComponent implements OnInit {

  message = '';
  addContentForm!: FormGroup
  constructor(private formBuilder: FormBuilder, private srv: BookContentService, private router: Router) { }

  ngOnInit(): void {
    this.addContentForm = this.formBuilder.group({
      bookId: ['', Validators.required],
      synopsis: ['', Validators.required]
    })
  }

  addContent() {
    const formValue = this.addContentForm.value;
    this.srv.addContent(formValue.bookId, formValue.synopsis).subscribe(
      (response) => {
        alert("Book content added succesfully");
        this.router.navigate([`/admin/content`]);
      }
    )
  }

}
