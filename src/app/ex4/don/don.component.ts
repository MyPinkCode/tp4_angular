import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-don',
  templateUrl: './don.component.html',
  styleUrls: ['./don.component.css']
})
export class DonComponent implements OnInit {
  @Input() d :string;
  total:number = 0;
  @Output() onChange= new EventEmitter<number>();
  onEnvoyer(n)
  {this.total =Number(this.total)+Number(n);
   this.onChange.emit(this.total);
  }
  constructor() { }

  ngOnInit() {
  }

}
