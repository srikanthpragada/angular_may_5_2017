import { Component, OnInit } from '@angular/core';
import { Book } from './Book';
import { BooksService } from './books.service';

@Component({
    selector: 'st-books',
    templateUrl: 'app/http/books.component.html',
    providers : [ BooksService]
})
export class UseBooksServiceComponent implements OnInit {
    books: Book[];
    constructor(private booksService: BooksService) {

    }

    ngOnInit() {
        this.booksService.getBooks()
            .subscribe(books => this.books = books);
    }


}