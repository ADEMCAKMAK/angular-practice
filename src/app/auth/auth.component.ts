import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {

  subscription: Subscription;

  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService, private router: Router) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(authForm: NgForm) {

    if( !authForm.valid )
      return;

    console.log(authForm.value);

    let authObs: Observable<AuthResponseData>;

    const email = authForm.value.email;
    const password = authForm.value.password;

    if( this.isLoginMode ) {
      authObs = this.authService.login(email, password);
    }
    else {
      authObs = this.authService.login(email, password);
    }
    
    this.isLoading = true;
    this.subscription = authObs.subscribe(response => {
      console.log(response);
      this.isLoading = false;
      this.router.navigate(['/recipes']);
    }, error => {
      console.log(error);
      this.error = error;
      this.isLoading = false;
    });

    authForm.reset();
  }

  onHandleError() {
    this.error = null;
  }
}
