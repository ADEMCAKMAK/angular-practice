import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('htmlFormElement') signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

/*
  onSubmit(htmlFormElement: NgForm): void {
    console.log(htmlFormElement);
  }
*/


  onSubmit(): void {
    console.log(this.signupForm);
  }
}
