// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ListProductComponent } from './products/list-product/list-product.component';
import { SearchProductComponent } from './products/search-product/search-product.component';
import { UpdateProductComponent } from './products/update-product/update-product.component';


const routes: Routes = [
 {path:'add-product',component:AddProductComponent},
 {path:'list-product',component:ListProductComponent},
 {path:'search-product',component:SearchProductComponent},
 {path:'update-product/:id',component:UpdateProductComponent}
  // Définissez d'autres routes ici si nécessaire
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
