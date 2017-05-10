import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'st-login',
  templateUrl: '/app/forms/reactive-login.component.html'
})
export class ReactiveLoginComponent {
  loginForm : FormGroup;
  isSubmitted : boolean = false; 

  constructor (private fb: FormBuilder ) {
    this.loginForm =  this.fb.group(
      {
        username : ["", Validators.compose
                   ([Validators.required, Validators.minLength(4)])],
        password : ["",Validators.required]
      }
    )
  }
  
  onSubmit(): void{
    this.isSubmitted = true;
    console.log( this.loginForm.controls["username"].value);
    console.log( this.loginForm.value.username);
    console.log( this.loginForm);
    //this.loginForm.setValue( { "username" : ""});
  }
}

