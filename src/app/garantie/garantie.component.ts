import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-garantie',
  templateUrl: './garantie.component.html',
  styleUrls: ['./garantie.component.css']
})
export class GarantieComponent implements OnInit {

	@Input() activeItem = '';
  contactForm: FormGroup;

  constructor(private connectionService: ConnectionService, private fb: FormBuilder) {
    this.contactForm = fb.group({
      'contactFormName': ['', Validators.required],
      'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
      'contactFormSubjects': ['', Validators.required],
      'contactFormMessage': ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.contactForm.valid) {
      this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
      alert('Your message has been sent.');
      this.contactForm.reset();

    }, error => {
      console.log('Error', error);
    });
    }
    else{
      alert(this.contactForm.valid);
    }
  }
}
