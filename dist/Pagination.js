"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pagination = function Pagination(_ref) {
    var posts = _ref.posts,
        displayNumber = _ref.displayNumber,
        previousText = _ref.previousText,
        nextText = _ref.nextText,
        Show = _ref.Show;


    var page = (0, _react.useRef)();

    var previousTextVariable = previousText ? previousText : "Previous";
    var nextTextVariable = nextText ? nextText : "Next";
    var transient = posts.slice(0).reverse();
    var fixed = displayNumber ? parseInt(displayNumber) : 5;
    var lastElem = Number(Math.ceil(transient.length / fixed));

    var _useState = (0, _react.useState)(1),
        _useState2 = _slicedToArray(_useState, 2),
        current = _useState2[0],
        setCurrent = _useState2[1];

    var list = [];
    var variable = 0;

    var i = 1,
        j;
    if (fixed <= transient.length) {
        for (j = 0; j < transient.length / fixed; j++) {
            list.push({
                id: i, include: transient.slice(variable, variable + fixed)
            });
            i += 1;
            variable += fixed;
        }
    }

    var clicked = function clicked(e) {
        e.preventDefault();
        var value = e.target.innerHTML;
        if (value === previousTextVariable) {
            if (value !== parseInt("1")) {
                setCurrent(parseInt(current) - 1);
            }
        } else if (value === nextTextVariable) {
            if (value !== parseInt(lastElem)) {
                setCurrent(parseInt(current) + 1);
            }
        } else {
            setCurrent(parseInt(value));
        }
    };

    var Previous = function Previous() {
        return current != 1 ? _react2.default.createElement(
            "li",
            { onClick: clicked },
            previousTextVariable
        ) : null;
    };
    var Next = function Next() {
        return current != lastElem ? _react2.default.createElement(
            "li",
            { onClick: clicked },
            nextTextVariable
        ) : null;
    };

    var currentPosts = list.filter(function (currentData) {
        return currentData.id === current;
    }).map(function (value) {
        return value.include;
    });

    return _react2.default.createElement(
        "div",
        { ref: page, className: "pagination" },
        _react2.default.createElement(
            "ul",
            null,
            currentPosts.map(function (value) {
                return value.map(function (data) {
                    return _react2.default.createElement(Show, { value: data });
                });
            })
        ),
        _react2.default.createElement(
            "ul",
            { className: "sayfalama" },
            _react2.default.createElement(Previous, null),
            list.map(function (value) {
                return value.id !== undefined ? _react2.default.createElement(
                    "li",
                    { "class": value.id === current ? "active" : "passive", onClick: clicked },
                    value.id
                ) : null;
            }),
            _react2.default.createElement(Next, null)
        )
    );
};

exports.default = Pagination;