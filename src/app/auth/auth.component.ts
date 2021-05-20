import { Component, ComponentFactoryResolver, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';
import { AlertComponent } from '../shared/alert/alert.component'
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnDestroy {

  subscription: Subscription;

  isLoginMode = true;
  isLoading = false;
  error: string = null;

  private closesubs: Subscription;

  @ViewChild(PlaceholderDirective, {static:false}) alert: PlaceholderDirective;

  constructor(private authService: AuthService, private router: Router,
  private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnDestroy(): void {
    if( this.closesubs )
      this.closesubs.unsubscribe();
  }

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
      this.showErrorAlert(error);
      this.isLoading = false;
    });

    authForm.reset();
  }

  onHandleError() {
    this.error = null;
  }

  private showErrorAlert(message: string) {

    // const alert = new AlertComponent();
    const alertCompFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);

    const hostViewContainerRef = this.alert.viewContainerRef

    hostViewContainerRef.clear();

    const compRef = hostViewContainerRef.createComponent(alertCompFactory);

    compRef.instance.message = message;
    this.closesubs = compRef.instance.close.subscribe(() => {
      this.closesubs.unsubscribe();
      hostViewContainerRef.clear();
    });

  }
}
