import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderCreateComponent } from './components/orders/order-create/order-create.component';
import { OrderFilterComponent } from './components/orders/order-filter/order-filter.component';
import { OrderProfileComponent } from './components/orders/order-profile/order-profile.component';
import { OrderEditComponent } from './components/orders/order-edit/order-edit.component';



@NgModule({
  declarations: [
    OrdersComponent,
    OrderCreateComponent,
    OrderFilterComponent,
    OrderProfileComponent,
    OrderEditComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class OrdersModule { }
