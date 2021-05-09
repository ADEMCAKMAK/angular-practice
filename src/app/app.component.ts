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
/*    const suggestedName = 'Superuser';
    this.signupForm.setValue({
      userData : {
        username: 'adem',
        email: ''
      },
      secret: 'pet',
      questionAnswer: 'milo',
      gender: 'male'
    });*/
    this.signupForm.form.patchValue({
      userData : {
        username: 'adem',
        email: ''
      }
    });
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
