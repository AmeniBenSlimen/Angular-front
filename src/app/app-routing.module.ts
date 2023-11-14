// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ListProductComponent } from './products/list-product/list-product.component';
import { SearchProductComponent } from './products/search-product/search-product.component';
import { UpdateProductComponent } from './products/update-product/update-product.component';
import { CreateMarqueComponent } from './views/marque/create-marque/create-marque.component';
import { ListeMarqueComponent } from './views/marque/liste-marque/liste-marque.component';


const routes: Routes = [
 {path:'add-product',component:AddProductComponent},
 {path:'list-product',component:ListProductComponent},
 {path:'search-product',component:SearchProductComponent},
 {path:'update-product/:id',component:UpdateProductComponent},
 {path:'add-marque',component:CreateMarqueComponent},
 {path:'list-marque',component:ListeMarqueComponent}
  // Définissez d'autres routes ici si nécessaire
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
