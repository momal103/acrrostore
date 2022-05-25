import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-form-input-text',
  templateUrl: './form-input-text.component.html',
  styleUrls: ['./form-input-text.component.css']
})

export class FormInputTextComponent implements OnInit {

  @Input() id = '';
  @Input() label = '';
  @Input() textarea = false;
  @Input() fCtrlName = '';

  @Input() contactForm!: FormGroup;

  constructor(private controlContainer: ControlContainer) {

}

  ngOnInit(): void {

  }

}
