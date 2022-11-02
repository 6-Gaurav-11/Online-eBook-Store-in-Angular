import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookContentService } from 'src/app/services/book-content.service';

@Component({
  selector: 'app-edit-content',
  templateUrl: './edit-content.component.html',
  styleUrls: ['./edit-content.component.css']
})
export class EditContentComponent implements OnInit {

  message = '';
  content: any;
  editContentForm!: FormGroup;
  constructor(private srv: BookContentService,private router: Router, private formBuilder: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.editContentForm = this.formBuilder.group({
      bookId: ['', Validators.required],
      synopsis: ['', Validators.required]
    })

    const theBookId = this.route.snapshot.paramMap.get('bookid')!;
    this.srv.getContent(theBookId).subscribe(
      (response) => {
        this.content = response;
      }
    )
  }

  loadApiData() {
    this.editContentForm.patchValue({
      bookId: this.content.bookId,
      synopsis: this.content.synopsis,
    });
  }

  editContent() {
    const formValue = this.editContentForm.value;
    this.srv.updateContent(formValue.bookId, formValue.synopsis).subscribe(
      (response) => {
        this.message = "Content updated successfully";
        alert("Content updated successfully");
        this.router.navigate([`/admin/content`])
      }
    )
  }

}
