import { Component, OnInit } from '@angular/core';
import { Author } from './Author';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  templateUrl: 'app/routing/author-details.component.html'
})
export class AuthorDetailsComponent implements OnInit {
  author: Author;
  id: number;

  constructor(private route: ActivatedRoute, private router: Router) {
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.author = this.getAuthor(this.id);
  }
  getAuthor(id: number): Author {
    // console.log("Route id : " + id);
    for (var a of Author.getAuthors()) {
      if (a.id == id) {
        return a;
      }
    }
  }

  back() {
    this.router.navigate(['authors']);
  }
}