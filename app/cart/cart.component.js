"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Item_1 = require("./Item");
var CartComponent = (function () {
    function CartComponent() {
    }
    CartComponent.prototype.ngOnInit = function () {
        this.cart = [new Item_1.Item(1, "Angular Cookbook", 450, 1),
            new Item_1.Item(2, "Angular In Action", 600, 2)];
        this.calculateTotal();
    };
    CartComponent.prototype.calculateTotal = function () {
        this.total = 0;
        for (var _i = 0, _a = this.cart; _i < _a.length; _i++) {
            var item = _a[_i];
            this.total += (item.price * item.qty) + (item.giftWrap ? 100 : 0);
        }
    };
    CartComponent.prototype.deleteItem = function (id) {
        // take confirmation
        var result = confirm("Do you really want to delete??");
        if (!result)
            return;
        // find position of the item in the cart and delete from cart
        for (var i = 0; i < this.cart.length; i++) {
            var item = this.cart[i];
            if (item.id == id) {
                this.cart.splice(i, 1); // remove element 
                this.calculateTotal();
                break;
            }
        }
    };
    return CartComponent;
}());
CartComponent = __decorate([
    core_1.Component({
        selector: 'st-cart',
        templateUrl: '/app/cart/cart.component.html'
    })
], CartComponent);
exports.CartComponent = CartComponent;
//# sourceMappingURL=cart.component.js.map