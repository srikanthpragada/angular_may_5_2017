import { Component } from '@angular/core';
@Component({
    selector: 'my-pipes',
    templateUrl: '/app/custom-pipes.component.html'
})
export class CustomPipesComponent {
     today = new Date(); 
     amount : number = 3939393;

}