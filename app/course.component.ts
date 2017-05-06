import { Component } from '@angular/core';

@Component({
  selector: 'st-course',
  templateUrl : 'app/course.component.html'
})
export class CourseComponent { 
   name : string ="Angular 2";
   duration : string = "10 Hours";
   topics : string [] = ["TypeScript", "Buliding Blocks", "Ajax"];
   
  
}