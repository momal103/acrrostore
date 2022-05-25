import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-input-text',
  templateUrl: './form-input-text.component.html',
  styleUrls: ['./form-input-text.component.css']
})
export class FormInputTextComponent implements OnInit {

  @Input() id = '';
  @Input() label = '';
  @Input() textarea = false;

  constructor() { }

  ngOnInit(): void {
  }

}
