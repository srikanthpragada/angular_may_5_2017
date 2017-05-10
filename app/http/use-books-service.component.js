"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var books_service_1 = require("./books.service");
var UseBooksServiceComponent = (function () {
    function UseBooksServiceComponent(booksService) {
        this.booksService = booksService;
    }
    UseBooksServiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.booksService.getBooks()
            .subscribe(function (books) { return _this.books = books; });
    };
    return UseBooksServiceComponent;
}());
UseBooksServiceComponent = __decorate([
    core_1.Component({
        selector: 'st-books',
        templateUrl: 'app/http/books.component.html',
        providers: [books_service_1.BooksService]
    }),
    __metadata("design:paramtypes", [books_service_1.BooksService])
], UseBooksServiceComponent);
exports.UseBooksServiceComponent = UseBooksServiceComponent;
//# sourceMappingURL=use-books-service.component.js.map