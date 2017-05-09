"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var CourseComponent = (function () {
    function CourseComponent() {
        this.name = "Angular 2";
        this.duration = "10 Hours";
        this.topics = ["TypeScript", "Buliding Blocks", "Ajax"];
    }
    CourseComponent.prototype.addTopic = function () {
        this.topics.push(this.newtopic);
        this.newtopic = "";
    };
    return CourseComponent;
}());
CourseComponent = __decorate([
    core_1.Component({
        selector: 'st-course',
        templateUrl: 'app/course.component.html'
    })
], CourseComponent);
exports.CourseComponent = CourseComponent;
//# sourceMappingURL=course.component.js.map