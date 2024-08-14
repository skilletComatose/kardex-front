import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InventoryProductComponent } from './pages/products/inventory/inventory-product.component';
import { CreateProductComponent } from './pages/products/create-product/create-product.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
    children: [
      {
        path: 'management',
        component: InventoryProductComponent
      },
      {
        path: 'create',
        component: CreateProductComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KardexRoutingModule { }
