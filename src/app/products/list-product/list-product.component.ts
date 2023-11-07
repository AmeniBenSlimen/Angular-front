import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/services/product.service';



@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit{
//productss : any;
products?:Product[] = []; //initializer the products array
//idTodelete: number = 0;
//ngOnInit : recharger la liste des produits 
constructor(private service:ProductService, private router:Router){ } //declarer un constructeur et injecter automatiquement

ngOnInit(){
  this.loadProduct();
}
loadProduct():void{

    this.service.getAll().subscribe({
      next : (res) => {
        this.products = res ; 
        console.log(this.products);
      },
      error: (error) =>{
        console.error('error fetching products :', error);
      },
  });
}
 deleteProduct(id:any):void {
  this.service.deleteProduct(id).subscribe({ 
    next : (res) => {
      this.loadProduct();
    },
    error: (error) =>{
      console.error('error to delete products :', error);
    },
  });
} 
updateProduct(id:any):void{
  this.router.navigate(['update-product',id]);
}
}
