import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order.model';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  // private apiUrl = 'http://localhost:3000/orders';
  


  // constructor(private http: HttpClient) { }

  // getOrders(): Observable<Order[]> {
  //   return this.http.get<Order[]>(this.apiUrl);
  // }

  // getOrderById(orderId: string): Observable<Order> {
  //   const url = `${this.apiUrl}/${orderId}`;
  //   return this.http.get<Order>(url);
  // }

  // placeOrder(orderData: any): Observable<any> {
  //   return this.http.post<any>(this.apiUrl, orderData);
  // }

 
  

  // getOrderByOrderNo(orderNo: number): Observable<Order> {
  //   const url = `${this.apiUrl}?orderNo=${orderNo}`;
  //   return this.http.get<Order>(url);
  // }
  private order: Order = {
    orderNo: 0,
    contactName: '',
    orderDate: '',
    itemsOrdered: 0,
    orderTotal: 0,
    taxTotal: 0,
    grandTotal: 0,
    items: [],
    id: ''
  };

  private ordersUrl = 'http://localhost:3000/orders'; 

  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.ordersUrl);
  }

  getOrderById(orderId: string): Observable<Order> {
    const url = `${this.ordersUrl}/${orderId}`;
    return this.http.get<Order>(url);
  }
  

   placeOrder(orderData: any): Observable<any> {
    return this.http.post<any>(this.ordersUrl, orderData);
  }
}

