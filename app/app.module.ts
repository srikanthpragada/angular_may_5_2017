import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CourseComponent }  from './course.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ CourseComponent ],
  bootstrap:    [ CourseComponent ]
})
export class AppModule { }
