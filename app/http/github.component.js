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
var http_1 = require("@angular/http");
require("rxjs/add/operator/do");
require("rxjs/add/operator/finally");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var GitHubComponent = (function () {
    function GitHubComponent(http) {
        this.http = http;
        this.url = "https://api.github.com/users/";
        this.isLoading = false;
        this.message = "";
    }
    GitHubComponent.prototype.getDetails = function (username) {
        var _this = this;
        this.user = null;
        this.message = '';
        this.isLoading = true;
        this.http.get(this.url + username)
            .finally(function () { return _this.isLoading = false; })
            .subscribe(function (response) { return _this.user = response.json(); }, function (error) { return _this.message = "Sorry! User Not Found!"; });
    };
    return GitHubComponent;
}());
GitHubComponent = __decorate([
    core_1.Component({
        selector: 'git-user',
        templateUrl: 'app/http/github.component.html'
    }),
    __metadata("design:paramtypes", [http_1.Http])
], GitHubComponent);
exports.GitHubComponent = GitHubComponent;
//# sourceMappingURL=github.component.js.map