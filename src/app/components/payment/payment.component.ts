import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';
import { LibraryService } from 'src/app/services/library.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  books: any;
  paymentForm!: FormGroup;
  addLibMessage = '';
  orderMessage = '';
  constructor(private formBuilder: FormBuilder, private orderSrv: OrderService, private libraryService: LibraryService, private router: Router, private srv: BooksService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleBookDetails();
    });
    this.paymentForm = this.formBuilder.group({
      name: ['', Validators.required],
      cardnumber: ['', Validators.required, Validators.minLength(16), Validators.maxLength(16)],
      expmonth: ['', Validators.required],
      expyear: ['', Validators.required],
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
    })
  }

  handleBookDetails() {
    const theBookId = this.route.snapshot.paramMap.get('bookid')!;
    this.srv.getBook(theBookId).subscribe(
      (response) => {
        this.books = response;
      }
    )
  }

  addToLibrary(bookId: string) {
    this.orderSrv.addOrder(localStorage.getItem('username')!, bookId).subscribe(
      (response) => {
        this.orderMessage = response;
      }
    );
    
    this.libraryService.addToLibrary(localStorage.getItem('username')!, bookId).subscribe(()=> {
      (response: string) => {
        this.addLibMessage = response;
      }
    })
    alert("Payment Successful ! Book successfully added to your library !");
    this.router.navigate([`/library`]);
  }

}
