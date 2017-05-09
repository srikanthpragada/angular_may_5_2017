import { NgModule}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { BindingComponent }  from './binding.component';
import { AppComponent }  from './app.component';
import { CourseComponent }  from './course.component';
import { InterestComponent }  from './interest.component';
import { CustomPipesComponent }  from './custom-pipes.component';

import { UseLogComponent }  from './services/uselog.component';

import { CartComponent }  from './cart/cart.component';

import { BracketsPipe }  from './brackets.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ UseLogComponent ],
  bootstrap:    [ UseLogComponent ]
})
export class AppModule { }
