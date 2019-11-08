import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
tabnote=[15,20,19,8,4,16.5];
  constructor() { }

  ngOnInit() {
  }

}
