import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  // private orderUrl = "http://localhost:8600/bookstore/orders";
  private orderUrl = "http://localhost:8400/bookstore/orders";

  orders: any;
  constructor(private http: HttpClient) { }

  getAllOrders() {
    const getAllOrdersUrl = `${this.orderUrl}/getall`;
    return this.http.get(getAllOrdersUrl).pipe(
      map(res => res)
    );
  }

  getOrder(username: string) {
    const getOrderUrl = `${this.orderUrl}/get/${username}`;
    return this.http.get(getOrderUrl).pipe(
      map(res => res)
    );
  }

  addOrder(username: string, bookId: string) {
    const addOrderUrl = `${this.orderUrl}/add`;
    return this.http.post(addOrderUrl, {username, bookId}, {responseType: 'text'});
  }
}