import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder,  FormGroup,  FormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { CommonModule } from '@angular/common';
import { Order } from '../../models/order.model';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-place-order',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterOutlet,RouterLink,HttpClientModule],
  templateUrl: './place-order.component.html',
  styleUrl: './place-order.component.css'
})
export class PlaceOrderComponent {
//   itemName: string = '';
//   quantity: number = 0; 

//   constructor(private orderService: OrderService) {}

//   submitOrder(): void {

//     if (!this.itemName || !this.quantity || this.quantity <= 0) {
//       alert('Please enter a valid item name and quantity.');
//       return;
//     }

// this.orderService.placeOrder(this.itemName).subscribe(
//   (response) => {
//     console.log('Order placed successfully:', response);
   
//     this.itemName = '';
//     this.quantity = 0;
//   }
 
// );

  
// }

   
  contactName!: string;
  orderid!: string;
  orderNo!:number;
constructor(private orderService: OrderService) { }
ngOnInit(): void {
}



submitOrder(): void {
  const orders: Order = {
    orderNo: this.orderNo,
    contactName: this.contactName,
    id: this.orderid,
    itemsOrdered: 0,
    orderTotal: 0,
    taxTotal: 0,
    grandTotal: 0,
    items: [],
    orderDate: ''
  };


}
}
