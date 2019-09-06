import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from 'C:/Users/ESLAM/project2/src/app/products/products.component';
import { MyOrderComponent } from 'src/app/my-order/my-order.component';
import { AdminProductsComponent } from 'src/app/admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from 'src/app/admin/admin-orders/admin-orders.component';
import { ShopComponent } from 'src/app/shop/shop.component';

const routes: Routes = [
{path : 'product' , component: ProductsComponent},
{path : 'order' , component: MyOrderComponent},
{path : 'admin/orders' , component: AdminOrdersComponent},
{path : 'admin/product' , component: AdminProductsComponent},
{path : 'shop' , component: ShopComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
