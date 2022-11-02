import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  order: any;
  constructor(private srv: OrderService) { }

  ngOnInit(): void {
    this.listOrders();
    this.totalAmt();
  }

  listOrders() {
    this.srv.getOrder(localStorage.getItem('username')!).subscribe(
      (response) => {
        this.order = response;
      }
    );
  }

  totalAmt(): number {
    let sum = 0;
    for(let o of this.order) {
      sum += o.price;
    }
    return sum;
  }

}
