import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() feacturesSelect = new EventEmitter<string>();
  constructor() { }

  onSelect(feature: string){
    this.feacturesSelect.emit(feature);

  }

  ngOnInit() {
  }
  

}
