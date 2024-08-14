import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KardexRoutingModule } from './kardex-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ManageProductComponent } from './pages/products/inventory/manage-product.component';
import { ProductCardComponent } from './pages/products/inventory/components/product-card/product-card.component';
import { CreateProductComponent } from './pages/products/create-product/create-product.component';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [
    HomeComponent,
    ManageProductComponent,
    ProductCardComponent,
    CreateProductComponent
  ],
  imports: [
    CommonModule,
    KardexRoutingModule,
    ShareModule
  ]
})
export class KardexModule { }
