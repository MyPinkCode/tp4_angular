import { Component, OnInit,Input } from '@angular/core';
import { Materiel } from '.././materiel';

@Component({
  selector: 'app-matriel',
  templateUrl: './matriel.component.html',
  styleUrls: ['./matriel.component.css']
})
export class MatrielComponent implements OnInit {
  
     @Input() mat: Materiel;
  constructor() { }

  ngOnInit() {
  }

}
