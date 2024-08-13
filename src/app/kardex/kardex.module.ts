import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KardexRoutingModule } from './kardex-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ManageProductComponent } from './pages/products/manage-product/manage-product.component';
import { MaterialModule } from '../material/material.module';
import { ProductCarddComponent } from './pages/products/components/product-cardd/product-cardd.component';


@NgModule({
  declarations: [
    HomeComponent,
    ManageProductComponent,
    ProductCarddComponent
  ],
  imports: [
    CommonModule,
    KardexRoutingModule,
    MaterialModule
  ]
})
export class KardexModule { }
