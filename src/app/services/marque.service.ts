import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Marque } from '../marque';

@Injectable({
  providedIn: 'root'
})
export class MarqueService {
private BasicUrl ='http://localhost:8083/shop/marques';
  constructor(private http:HttpClient) { }
  public getMarques(){
    return this.http.get<Marque[]>(`${this.BasicUrl}`);
  }

  public createMarque(marque:any){
    return this.http.post<Marque>(`${this.BasicUrl}`,marque);
  }
}
