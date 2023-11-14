import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Marque } from 'src/app/marque';
import { MarqueService } from 'src/app/services/marque.service';

@Component({
  selector: 'app-create-marque',
  templateUrl: './create-marque.component.html',
  styleUrls: ['./create-marque.component.css']
})
export class CreateMarqueComponent implements OnInit {

  constructor (){}
  
  ngOnInit(): void { 
 
}

}
