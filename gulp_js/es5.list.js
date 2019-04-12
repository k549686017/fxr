"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//点击购物车
var og = document.getElementById("gouye");
og.onclick = function () {
    if (getCookie("news")) {
        window.location.href = "car.html";
    } else {
        window.location.href = "login.html";
    }
};
//点击购物车


//加载商品列表

var Goods = function () {
    function Goods(options) {
        _classCallCheck(this, Goods);

        this.cont = options.cont;
        this.url = options.url;
        this.load();
        this.addEvent();
        this.gouWuche();
    }

    _createClass(Goods, [{
        key: "load",
        value: function load() {
            var that = this;
            ajaxGet(this.url, function (res) {
                that.res = JSON.parse(res);
                that.display();
            });
        }
    }, {
        key: "display",
        value: function display() {
            var str = "";
            this.res.forEach(function (value) {
                str += "<div class=\"box\" index=\"" + value.goodsId + "\">\n                        <img src=\"" + value.src + "\">\n                        <span>" + value.price + "</span>\n                        <p>" + value.name + "</p>\n                        <em>\u52A0\u5165\u8D2D\u7269\u8F66</em>\n                    </div>";
            });
            this.cont.innerHTML = str;
        }
    }, {
        key: "addEvent",
        value: function addEvent() {
            var that = this;
            this.cont.addEventListener("click", function (eve) {
                if (getCookie("news")) {
                    var e = eve || window.event;
                    var target = e.target || e.srcElement;
                    if (target.nodeName == "EM") {
                        that.id = target.parentNode.getAttribute("index");
                        that.setGoods();
                    }
                } else {
                    window.location.href = "login.html";
                }
            });
        }
    }, {
        key: "gouWuche",
        value: function gouWuche() {
            this.og = document.getElementById("gouye");
            this.og.onclick = function () {
                if (getCookie("news")) {
                    window.location.href = "car.html";
                } else {
                    window.location.href = "login.html";
                }
            };
        }
    }, {
        key: "setGoods",
        value: function setGoods() {
            this.goods = getCookie("goods") === "" ? [] : JSON.parse(getCookie("goods"));
            if (this.goods.length < 1) {
                this.goods.push({
                    id: this.id,
                    num: 1
                });
            } else {
                var onoff = true;
                for (var i = 0; i < this.goods.length; i++) {
                    if (this.goods[i].id === this.id) {
                        this.goods[i].num++;
                        onoff = false;
                        break;
                    }
                }
                if (onoff) {
                    this.goods.push({
                        id: this.id,
                        num: 1
                    });
                }
            }
            setCookie("goods", JSON.stringify(this.goods));
        }
    }]);

    return Goods;
}();

new Goods({
    cont: document.getElementById("cont"),
    url: "data.json"
});