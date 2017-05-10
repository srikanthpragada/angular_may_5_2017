import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Book } from './Book';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'st-books',
    templateUrl: 'app/http/books.component.html'
})
export class ListBooksComponent implements OnInit {
    books: Book[];
    constructor(private http: Http) {

    }

    ngOnInit() {
        this.http.get("/app/http/books.json")
        .map(resp => <Book[]> resp.json())   
        .subscribe( books => this.books =  books);
    }


}