import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  submitted = false;

  @ViewChild('saveData') signupForm: NgForm;
  data = {
    email: '',
    subscription: '',
    password: ''
  };

  onSave() {
    console.log(this.signupForm.value);
    this.submitted = true;
    this.data = this.signupForm.value;
  }
}
