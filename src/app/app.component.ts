import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  projectForm: FormGroup;
  projectStatus: string[] = ['Stable', 'Critical', 'Finished'];
  selectedValue: any;
  status: any;
  private forbiddenUsernames: string[] = ['Test'];

  constructor() {
  }

  onSubmit(): void {
    console.log(this.projectForm);
  }

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'projectData': new FormGroup({
        'projectName': new FormControl(null, [Validators.required, this.forbiddenProjectNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
      }),
      'status': new FormControl()
    });

    // this.projectForm.valueChanges.subscribe(value => console.log(value));
  }

  forbiddenProjectNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    return new Promise<any>(((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          return resolve(null);
        }
      }, 7000);
    }));
  }
}
