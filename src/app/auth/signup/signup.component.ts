import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  signUpForm = this.fb.group({
    name: ['', [Validators.required,]],
    lastname: ['', [Validators.required]],
    ID: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')]],
    confirmPassword: ['', [Validators.required]]
  })

  get name() {
    return this.signUpForm.get('name');
  }

  get lastname() {
    return this.signUpForm.get('lastname');
  }

  get ID() {
    return this.signUpForm.get('ID');
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }

  onSubmit() {
    console.log(this.signUpForm.value);
  }

}
