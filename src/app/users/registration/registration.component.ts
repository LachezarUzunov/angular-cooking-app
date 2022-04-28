import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  imagePreview: string = '';

  constructor(public UsersService: UsersService) {}

  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(2)],
      }),
      lastName: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)],
      }),
      email: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(5)],
      }),
      password: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(6)],
      }),
      repass: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(6)],
      }),
      image: new FormControl(null, {
        validators: [Validators.required],
      }),
    });
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files![0];
    this.form.patchValue({ image: file });
    this.form.get('image')?.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  onRegistration() {
    if (this.form.invalid) {
      return;
    }

    if (this.form.value.password !== this.form.value.repass) {
      return;
    } else {
      const newUser = {
        firstName: this.form.value.firstName,
        lastName: this.form.value.lastName,
        email: this.form.value.email,
        password: this.form.value.password,
      };

      this.UsersService.addUser(
        newUser.firstName,
        newUser.lastName,
        newUser.email,
        newUser.password
      );
    }

    this.form.reset();
  }
}
