import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-dons',
  templateUrl: './liste-dons.component.html',
  styleUrls: ['./liste-dons.component.css']
})
export class ListeDonsComponent implements OnInit {
  dons=['Ahmed Mhiri', 'Sami Mrad', 'Olfa Ben Nasr'];
  total=0;
  onAfficher(event:number)
  {
   this.total = event;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
