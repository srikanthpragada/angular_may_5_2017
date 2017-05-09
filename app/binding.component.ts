import { Component } from '@angular/core';

@Component({
  selector: 'st-binding',
  templateUrl : 'app/binding.component.html' ,
})
export class BindingComponent  { 
    name = 'Srikanth Technologies'; 
    color : string = "blue";
    isBig : boolean  = true;
    isBright : boolean  = false;

    process(value : string) 
    {
        this.name = value;
    }

}
