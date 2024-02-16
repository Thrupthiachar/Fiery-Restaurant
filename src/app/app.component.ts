import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ViewOrderInfoComponent } from './Orders/Components/view-order-info/view-order-info.component';
import { ViewOrdersComponent } from './Orders/Components/view-orders/view-orders.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { HomeComponent } from './shared/components/home/home.component';
import { PaymentsComponent } from './Payments/Components/payments/payments.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { PlaceOrderComponent } from './Orders/Components/place-order/place-order.component';
import { FormsModule } from '@angular/forms';
import { routes } from './app.routes';
import { ItemComponent } from './item/item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,HttpClientModule,FormsModule,HeaderComponent,FooterComponent,ViewOrderInfoComponent,ViewOrdersComponent,MenuComponent,HomeComponent,PaymentsComponent,CommonModule,HttpClientModule,PlaceOrderComponent,ItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FieryRestaurant';
  constructor(private router: Router) {
    this.router.resetConfig(routes);
  }
 
}
