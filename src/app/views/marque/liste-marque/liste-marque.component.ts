import { Component, OnInit } from '@angular/core';
import { Marque } from 'src/app/marque';
import { MarqueService } from 'src/app/services/marque.service';

@Component({
  selector: 'app-liste-marque',
  templateUrl: './liste-marque.component.html',
  styleUrls: ['./liste-marque.component.css']
})
export class ListeMarqueComponent implements OnInit {
marques  : Marque[] = [];
constructor(private service:MarqueService){}

ngOnInit(): void {
  this.service.getMarques().subscribe({
    next: (data) =>{
      this.marques = data ;
    },
    error : (Error) =>{
      console.log(Error);
    }
  });
}
}
