import { AbsoluteSourceSpan } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors,FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registrationForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {
   }

  ngOnInit() {
    this.registrationForm=this.formBuilder.group(
      {
        userName: new FormControl('Mark',Validators.required),
        email:new FormControl(null,[Validators.required, Validators.email]),
        password:new FormControl(null,[Validators.required,Validators.minLength(8)]),
        confirmPassword:new FormControl(null,[Validators.required]),
        mobileNumber:new FormControl(null,[Validators.required,Validators.maxLength(10)])
      }
    );
  }
  // ------------------------------------
  // Getter methods for all form controls
  // ------------------------------------
  get userName() {
    return this.registrationForm.get('userName') as FormControl;
  }

  get email() {
    return this.registrationForm.get('email') as FormControl;
  }
  get password() {
    return this.registrationForm.get('password') as FormControl;
  }
  get confirmPassword() {
    return this.registrationForm.get('confirmPassword') as FormControl;
  }
  get mobile() {
    return this.registrationForm.get('mobileNumber') as FormControl;
  }
  // ------------------------
  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    debugger;
    if (c.get('password')?.value !== c.get('confirmPassword')?.value) {
        return {invalid: true};
    }
    return {invalid:false};
}
  onSubmit(){
    console.log(this.registrationForm);
  }

}
