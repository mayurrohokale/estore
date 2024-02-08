import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const matchPasswords: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get( 'confirmPassword' );
    if(password?.value !== confirmPassword?.value){
        return {passwordMissmatch: true};
    }
    return null;
}