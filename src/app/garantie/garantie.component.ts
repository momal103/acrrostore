import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-garantie',
  templateUrl: './garantie.component.html',
  styleUrls: ['./garantie.component.css']
})
export class GarantieComponent implements OnInit {

	@Input() activeItem = '';
	
  constructor() { }

  ngOnInit(): void {
  }

}
