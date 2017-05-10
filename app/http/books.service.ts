import { Injectable } from "@angular/core";
import { Book } from './Book';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BooksService {
    constructor(private http: Http) {

    }

    getBooks() {
        console.log("BooksService.getBooks()");
        return this.http.get("/app/http/books.json")
            .map(resp => <Book[]>resp.json());
        
        
    }
}