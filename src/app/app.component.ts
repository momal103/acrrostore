import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Acrrostore';
  public activeItem = 'ACCUEIL';
  
  SetActiveItem($event: string){
		this.activeItem = $event;
	}
}
