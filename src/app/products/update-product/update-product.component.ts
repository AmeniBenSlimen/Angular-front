import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

//double way binding???

//ActivatedRoute : c'est manipuler les routes activer bch nejbeed les params m path
//sniper : pour récupérer l'id
//snapshot : temchy lel path w tlawej aal attribut elli ena hachty byh === bech yekhou l id m url w ykhabbih f productId

//{{ }}<==== interpolation
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  produit:Product = new Product() ;
  productId:number = 0;

  constructor(private service:ProductService ,private sniper:ActivatedRoute, private router:Router){ }

  ngOnInit(): void {
    this.productId = this.sniper.snapshot.params['id'];
    this.service.getProduct(this.productId).subscribe({
      next : (res) => {
        this.produit = res;
      },
      error : (error) =>{
        console.error('error fetching product with id :' +this.productId, error);
      }
    })
  }
  updateProduct():void{
    this.service.updateProduct(this.productId,this.produit).subscribe({
        next : (res) =>{
          this.router.navigate(['list-product']);
        },
        error : (error) => {
          console.error('error updating product with id : '+this.productId);
        }
    });
}
}
