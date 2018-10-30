import { ValidationErrors, FormGroup } from '@angular/forms';

export class PasswordValidator {
    static passwordShouldMatch(formGroup: FormGroup): ValidationErrors | null {

        let password = formGroup.controls.password.value;
        let confirmPassword = formGroup.controls.confirmPassword.value;
        if ( password !== confirmPassword)  {
           return {passwordShouldMatch: true};
        }
        return null;
    }
}
