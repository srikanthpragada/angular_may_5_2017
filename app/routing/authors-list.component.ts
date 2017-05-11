import { Component, OnInit } from '@angular/core';
import { Author }  from "./Author";

@Component({
  templateUrl : 'app/routing/authors-list.component.html'
})
export class AuthorsListComponent implements OnInit  { 
     authors : Author [] ;
     
     ngOnInit() {
       this.authors = Author.getAuthors();
     }
   
      
  
}


 