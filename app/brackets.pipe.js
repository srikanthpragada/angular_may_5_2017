"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var BracketsPipe = (function () {
    function BracketsPipe() {
    }
    BracketsPipe.prototype.transform = function (value, newcase) {
        if (newcase === void 0) { newcase = 'n'; }
        if (newcase == 'u')
            value = value.toUpperCase();
        else if (newcase == "l")
            value = value.toLowerCase();
        return "[" + value + "]";
    };
    return BracketsPipe;
}());
BracketsPipe = __decorate([
    core_1.Pipe({ name: 'brackets' })
], BracketsPipe);
exports.BracketsPipe = BracketsPipe;
//# sourceMappingURL=brackets.pipe.js.map