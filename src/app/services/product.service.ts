import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../product';
//service houa l contacti l back-end
// @Injectable injecter des objet 
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private BasicUrl ='http://localhost:8083/shop/products';
//HttpClient : houa l bch yaaml l communication bin l front w back
  constructor(private http:HttpClient) { }

  public getAll(){
    //get<Product[]> : le type de retour c'est un tab
    return this.http.get<Product[]>(`${this.BasicUrl}`);
  }
  addproduct(product:any){
//post<Product> : le type de retour
    return this.http.post<Product>(`${this.BasicUrl}`,product);
  } 

  deleteProduct(id:any){
    return this.http.delete<any>(`${this.BasicUrl}?id=${id}`);
 }
 getProduct(id:any){
    return this.http.get<any>(`${this.BasicUrl}/get?id=${id}`);
 }
 //objet product ya3ni l contenue
 updateProduct(id:any,product:any){
    return this.http.put<Product>(`${this.BasicUrl}/?id=${id}`,product);
 }

}
