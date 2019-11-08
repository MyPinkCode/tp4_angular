import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  materiels = [
    {nom:'Scanner', reference: 'e7f8', image: '../assets/scanner.jpg', prix: 253.45, repare:'réparé'},
    {nom:'Ecran', reference: 'ec18', image: '../assets/ecran.jpg', prix: 403.5, repare:'endommagé'},
    {nom:'Imprimante', reference: 'imp88', image: '../assets/imprimante.jpg', prix: 189.5, repare:'endommagé'},
    {nom:'Pc Portable', reference: 'hp58', image: '../assets/pc.jpg', prix: 1512.8, repare:'réparé'}
     ];
  constructor() { }

  ngOnInit() {
  }

}
