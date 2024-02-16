import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/order.model';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Item } from '../../models/item.model';


@Component({
  selector: 'app-view-orders',
  standalone: true,
  imports: [CommonModule,HttpClientModule,RouterLink,RouterOutlet,FormsModule],
  templateUrl: './view-orders.component.html',
  styleUrl: './view-orders.component.css'
})
export class ViewOrdersComponent implements OnInit {
  orders: Order[] = [];
  selectedOrderItems:Item[]=[];
  constructor(private orderService: OrderService,private router: Router) { }

  ngOnInit(): void {
    this.getOrders();
  }


  getOrders(): void {
    this.orderService.getOrders()
      .subscribe(
        (orders: Order[]) => {
          this.orders = orders;
        },
        (error: any) => {
          console.error('Error fetching orders:', error);
        }
      );
  }

  viewOrders(): void {
 
    this.router.navigate(['Orders/Components/view-orders']);
    console.log("working")
}

  viewOrderDetails(orderId: string): void {
    this.router.navigate(['/view-order-info', orderId]);
  }
  

  }


