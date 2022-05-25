import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-service-client',
  templateUrl: './service-client.component.html',
  styleUrls: ['./service-client.component.css']
})
export class ServiceClientComponent implements OnInit {
 
	@Input() activeItem = '';
	
  constructor() { }

  ngOnInit(): void {
  }

}
