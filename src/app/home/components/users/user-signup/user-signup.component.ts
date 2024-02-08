import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss'],
})
export class UserSignupComponent implements OnInit {
  userSignupForm: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.userSignupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      address: [''],
      city: [''],
      state: [''],
      pin: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }


    get firstName(): AbstractControl<any, any> | null {
      return this.userSignupForm.get('firstName');
    }

    get email(): AbstractControl<any, any> | null {
      return this.userSignupForm.get('email');
    }
    get password(): AbstractControl<any, any> | null {
      return this.userSignupForm.get('password');
    }

    get confirmPassword(): AbstractControl<any, any> | null {
      return this.userSignupForm.get('confirmPassword');
    }


  onSubmit(): void {}
}

