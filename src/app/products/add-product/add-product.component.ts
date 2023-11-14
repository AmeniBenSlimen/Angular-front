import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Marque } from 'src/app/marque';
import { Product } from 'src/app/product';
import { MarqueService } from 'src/app/services/marque.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  produit : Product = new Product();
  marque : Marque [] = [];
  constructor (private mservice:MarqueService,private service:ProductService, private router:Router){}
  //ngOnInit : c'est la methode executer par defaut wa9t l componment charger ya3ml load automatiquenet
  ngOnInit(): void { 
  this.mservice.getMarques().subscribe({
    next : (data)=>{
      this.marque = data;
    },
    error: (error) =>{
      console.log(error);
  }
 })
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
