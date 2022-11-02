import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent implements OnInit {

  orders: any;
  message = '';
  constructor(private srv: OrderService) { }

  ngOnInit(): void {
    this.listAllOrders();
    this.totalAmt();
  }

  listAllOrders() {
    this.srv.getAllOrders().subscribe(
      (response) => {
        this.orders = response;
      }
    );
  }

  totalAmt(): number {
    let sum = 0;
    for(let o of this.orders) {
      sum += o.price;
    }
    return sum;
  }

}
