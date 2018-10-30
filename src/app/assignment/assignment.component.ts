import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordValidator } from './password.validators';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent {

  constructor() { }

  genders = [{id: 1 , value: 'Male' },
            { id: 2, value: 'Female'} ,
            {id: 3 , value : 'Others'}];


 passwordForm = new FormGroup({
      password: new FormControl('', [Validators.required, Validators.pattern(/^(?=[^\d_].*?\d)\w(\w|[!@#$%]){7,20}/)]),
      confirmPassword: new FormControl('', Validators.required)
 }, PasswordValidator.passwordShouldMatch);

signUpForm = new FormGroup({
  email: new FormControl('', [ Validators.required, Validators.email]),
  passwordForm: this.passwordForm,
  gender: new FormControl('', Validators.required),
  chkAccept: new FormControl('', Validators.requiredTrue)
});

get email() {
return this.signUpForm.get('email');
}
get gender() {
  return this.signUpForm.get('gender');
  }

get password() {
  return this.passwordForm.get('password');
  }
  get confirmPassword() {
    return this.passwordForm.get('confirmPassword');
    }

    get chkAccept() {
      return this.signUpForm.get('chkAccept');
      }

login(form) {

console.log(form);

}

}
