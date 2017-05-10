import { Component } from '@angular/core';

@Component({
  selector: 'st-login',
  templateUrl : 'app/forms/login.component.html'
})
export class LoginComponent  {
     username : string;
     password : string;
    
     onSubmit() 
     {
         console.log(this.username);
         console.log(this.password);
     }
}
