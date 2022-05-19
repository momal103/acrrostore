import { Component, OnInit } from '@angular/core';

import { navItems } from '../nav-items';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  navItems = navItems;
  public activeItem : string = 'ACCUEIL';

  constructor() { }

  ngOnInit(): void {
  }

}
