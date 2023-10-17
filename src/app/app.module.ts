import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MaincardComponent } from './maincard/maincard.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ListProductComponent } from './products/list-product/list-product.component';
import { SearchProductComponent } from './products/search-product/search-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MaincardComponent,
    AddProductComponent,
    ListProductComponent,
    SearchProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
