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
var log_service_1 = require("./log.service");
var UseLogComponent = (function () {
    // Injects LogService into logService property  - Depedency Injection
    function UseLogComponent(logService) {
        this.logService = logService;
    }
    UseLogComponent.prototype.logMessage = function (msg) {
        this.logService.log(msg);
    };
    UseLogComponent.prototype.logError = function (msg) {
        this.logService.logError(msg);
    };
    return UseLogComponent;
}());
UseLogComponent = __decorate([
    core_1.Component({
        selector: 'st-log',
        templateUrl: 'app/services/uselog.component.html',
        providers: [log_service_1.LogService]
    }),
    __metadata("design:paramtypes", [log_service_1.LogService])
], UseLogComponent);
exports.UseLogComponent = UseLogComponent;
//# sourceMappingURL=uselog.component.js.map