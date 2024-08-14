import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('./kardex/kardex.module').then(m => m.KardexModule)
  },
  {
    path: '',
    redirectTo: 'products/create',
    pathMatch: 'full'
  }
  // {
  //   path: "**",
  //   redirectTo: 'products' // pendiente hacer una vista para 404
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
