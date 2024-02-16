import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
  makePayment(paymentAmount: number) {
    throw new Error('Method not implemented.');
  }

  private apiUrl = 'http://localhost:3000/payments'; 
  constructor(private http: HttpClient) { }

  // Example method to fetch payments data from the server
  getPayments(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Example method to create a new payment
  createPayment(paymentData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, paymentData);
  }

  // Example method to update an existing payment
  updatePayment(paymentId: number, paymentData: any): Observable<any> {
    const url = `${this.apiUrl}/${paymentId}`;
    return this.http.put<any>(url, paymentData);
  }

  // Example method to delete a payment
  deletePayment(paymentId: number): Observable<any> {
    const url = `${this.apiUrl}/${paymentId}`;
    return this.http.delete<any>(url);
  }
}
