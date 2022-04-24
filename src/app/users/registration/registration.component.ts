import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  firstName: string = '';
  enteredLastName: string = '';
  enteredEmail: string = '';

  onRegistration(regForm: NgForm) {
    if (regForm.invalid) {
      return;
    }

    const user = {
      firstName: regForm.value.firstName,
      lastName: regForm.value.lastName,
      email: regForm.value.email,
      pass: regForm.value.pass,
    };
  }
}
