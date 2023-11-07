import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  produit : Product = new Product();

  constructor (private service:ProductService, private router:Router){}
  
  ngOnInit(): void { 
 
}
create():void{
  //alert('create product');
  this.service.addproduct(this.produit).subscribe({
    next :(data) => {
      this.router.navigate(["/list-product"]);
    },
     error:(err) => {
      console.log(err);
    } 
  });
}

}
