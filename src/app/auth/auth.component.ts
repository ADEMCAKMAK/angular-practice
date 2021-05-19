import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {

  subscription: Subscription;

  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(authForm: NgForm) {

    if( !authForm.valid )
      return;

    console.log(authForm.value);

    const email = authForm.value.email;
    const password = authForm.value.password;

    if( this.isLoginMode ) {

    }
    else {
      this.isLoading = true;
      this.subscription = this.authService.signup(email, password).subscribe(response => {
        console.log(response);
        this.isLoading = false;
      }, error => {
        console.log(error);
        this.error = error.message;
        this.isLoading = false;
      });
    }

    authForm.reset();
  }
}
