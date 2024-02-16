import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PaymentsService } from '../../service/payments.service';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule,RouterLink,RouterOutlet],
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.css'
})
export class PaymentsComponent {
  paymentAmount: number = 0;
  payments: any[] = [];

  constructor(private paymentService: PaymentsService) { }

  ngOnInit(): void {
    this.getPaymentHistory();
  }
  // makePayment(): any {
  //   this.paymentService.makePayment(this.paymentAmount).subscribe(
  //     (response: any) => {
  //       console.log('Payment made successfully:', response);
      
  //       this.getPaymentHistory();
  //     },
  //     (error: any) => {
  //       console.error('Error making payment:', error);
      
  //     }
  //   );
  // }
  

  getPaymentHistory(): void {
    this.paymentService.getPayments().subscribe(
      (payments: any[]) => {
        this.payments = payments;
      },
      (error: any) => {
        console.error('Error fetching payment history:', error);
        
      }
    );
  }

}
