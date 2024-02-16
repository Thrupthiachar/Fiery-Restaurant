import { RouterModule, Routes } from '@angular/router';
import { ViewOrdersComponent } from './Orders/Components/view-orders/view-orders.component';
import { ViewOrderInfoComponent } from './Orders/Components/view-order-info/view-order-info.component';
import { NgModule } from '@angular/core';
import { PaymentsComponent } from './Payments/Components/payments/payments.component';
import { HomeComponent } from './shared/components/home/home.component';
import { PlaceOrderComponent } from './Orders/Components/place-order/place-order.component';
import { ItemComponent } from './item/item.component';
import { MenuComponent } from './shared/components/menu/menu.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: "home", component: HomeComponent },
    {path:"view-orders",component:ViewOrdersComponent},
    { path: 'view-order-info/:id', component: ViewOrderInfoComponent },
    // { path: 'payments', component: PaymentsComponent },
    { path: 'place-order', component: PlaceOrderComponent },
    { path: 'menu', component: MenuComponent }
  ];

  
  