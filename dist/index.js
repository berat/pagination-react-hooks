'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _Pagination = require('./Pagination');

var _Pagination2 = _interopRequireDefault(_Pagination);

require('./css/main.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
    return _react2.default.createElement(_Pagination2.default, null);
};
(0, _reactDom.render)(_react2.default.createElement(App, null), document.getElementById("root"));