import { Component, OnInit } from '@angular/core';
import { Book } from './Book';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Component({
    selector: 'st-books',
    templateUrl: 'app/http/books.component.html'
})
export class BooksComponent implements OnInit {
    books: Book[];

    constructor(private http: Http) {
    }

    ngOnInit() {
        this.http.get("/app/http/books.json")
            .toPromise()
            .then(resp => this.books = <Book[]> resp.json())

    }


}