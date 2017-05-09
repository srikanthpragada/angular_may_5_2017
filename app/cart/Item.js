"use strict";
var Item = (function () {
    function Item(id, name, price, qty, giftWrap) {
        if (giftWrap === void 0) { giftWrap = false; }
        this.id = id;
        this.name = name;
        this.price = price;
        this.qty = qty;
        this.giftWrap = giftWrap;
    }
    return Item;
}());
exports.Item = Item;
//# sourceMappingURL=Item.js.map