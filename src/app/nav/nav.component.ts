import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { navItems } from '../nav-items';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  navItems = navItems;
  public activeItem : string = 'ACCUEIL';
  
  @Output() activeItemEmitter = new EventEmitter<string>();
	
	SetActiveItem(itemClicked: string){
		this.activeItem = itemClicked;
		this.activeItemEmitter.emit(this.activeItem);
	}
	
  constructor() { }

  ngOnInit(): void {
  }

}
