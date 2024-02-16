import { Component } from '@angular/core';
import { Order } from '../../models/order.model';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-view-order-info',
  standalone: true,
  imports: [CommonModule,HttpClientModule,RouterLink,RouterOutlet],
  templateUrl: './view-order-info.component.html',
  styleUrl: './view-order-info.component.css'
})
export class ViewOrderInfoComponent {
  // orderId!: string|null;
  // order: Order | undefined;

  // constructor(
  //   private route: ActivatedRoute,
  //   private router: Router,
  //   private orderService: OrderService
  // ) { }

  // ngOnInit(): void {
  //   this.route.paramMap.subscribe(params => {
  //     this.orderId = params.get('id');
  //     if (this.orderId) {
  //       this.getOrderDetails(this.orderId);
  //     }
  //   });
  // }
  // getOrderDetails(orderId: string) {
  //   throw new Error('Method not implemented.');
  // }
 

  // goBack(): void {
  //   this.router.navigate(['/view-orders']);
  // }

  orderId!: string | null;
  order!: Order;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.orderId = params.get('id');
      if (this.orderId) {
        this.getOrderDetails(this.orderId);
      }
    });
  }
  
  getOrderDetails(orderId: string): void {
    this.orderService.getOrderById(orderId)
      .subscribe(
        (order: Order) => {
          this.order = order;
        },
        (error: any) => {
          console.error('Error fetching order details:', error);
        }
      );
  }

  goBack(): void {
    this.router.navigate(['/view-orders']);
  }


}
