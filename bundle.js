"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {

            cars: [{
                "manufacturer": "Toyota",
                "model": "Rav4",
                "year": 2008,
                "stock": 3,
                "price": 8500
            }, {
                "manufacturer": "Toyota",
                "model": "Camry",
                "year": 2009,
                "stock": 2,
                "price": 6500
            }, {
                "manufacturer": "Toyota",
                "model": "Tacoma",
                "year": 2016,
                "stock": 1,
                "price": 22000
            }, {
                "manufacturer": "BMW",
                "model": "i3",
                "year": 2012,
                "stock": 5,
                "price": 12000
            }, {
                "manufacturer": "Chevy",
                "model": "Malibu",
                "year": 2015,
                "stock": 2,
                "price": 10000
            }, {
                "manufacturer": "Honda",
                "model": "Accord",
                "year": 2013,
                "stock": 1,
                "price": 9000
            }, {
                "manufacturer": "Hyundai",
                "model": "Elantra",
                "year": 2013,
                "stock": 2,
                "price": 7000
            }, {
                "manufacturer": "Chevy",
                "model": "Cruze",
                "year": 2012,
                "stock": 2,
                "price": 5500
            }, {
                "manufacturer": "Dodge",
                "model": "Charger",
                "year": 2013,
                "stock": 2,
                "price": 16000
            }, {
                "manufacturer": "Ford",
                "model": "Mustang",
                "year": 2009,
                "stock": 1,
                "price": 8000
            }]
        };
        return _this;
    }

    _createClass(App, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "table",
                    null,
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "th",
                            null,
                            "Manufacturer"
                        ),
                        React.createElement(
                            "th",
                            null,
                            "Model"
                        ),
                        React.createElement(
                            "th",
                            null,
                            React.createElement(
                                "button",
                                { onClick: function onClick(e) {
                                        return _this2.tableSort();
                                    } },
                                React.createElement(
                                    "b",
                                    null,
                                    "Year"
                                )
                            )
                        ),
                        React.createElement(
                            "th",
                            null,
                            "Stock"
                        ),
                        React.createElement(
                            "th",
                            null,
                            "Price"
                        ),
                        React.createElement(
                            "th",
                            null,
                            "Option"
                        )
                    ),
                    this.state.cars.map(function (item) {
                        return React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                null,
                                item.manufacturer
                            ),
                            React.createElement(
                                "td",
                                null,
                                item.model
                            ),
                            React.createElement(
                                "td",
                                null,
                                item.year
                            ),
                            React.createElement(
                                "td",
                                null,
                                "\xA0\xA0",
                                item.stock
                            ),
                            React.createElement(
                                "td",
                                null,
                                "$",
                                item.price,
                                ".00"
                            ),
                            React.createElement(
                                "td",
                                null,
                                React.createElement(
                                    "button",
                                    { onClick: function onClick(e) {
                                            return _this2.updateStock(item) + 1;
                                        } },
                                    "Increment"
                                )
                            )
                        );
                    })
                )
            );
        }
    }]);

    return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
