import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() feacturesSelect2 = new EventEmitter<string>();

  onNavbar(feature :string){
    this.feacturesSelect2.emit(feature);
    console.log("gus 2");
    console.log(feature);

  }
 
  constructor() { }


  ngOnInit() {
  }

}
