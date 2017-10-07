(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

/**
 * Uses the react-transform babel plugin
 * to rewrite modules so that all react components are
 * exported.
 *
 * This allows us to access those components and test them.
 *
 * ex:
 *
 * // component.js
 *
 * var MyComponent = React.createClass({});
 *
 * // component-test.js
 *
 * var components = require('../component.js');
 *
 * console.log(components.__ReactComponents.MyComponent);
 *
 */

module.exports = function createExport(_ref) {
  var locals = _ref.locals;


  return function (ReactClass, componentId) {

    if (!locals[0].exports) {
      locals[0].exports = {};
    }

    if (!locals[0].exports.__ReactComponents) {
      locals[0].exports.__ReactComponents = [];
    }

    locals[0].exports.__ReactComponents.push(ReactClass);

    return ReactClass;
  };
};

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = undefined;

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformComponentExports = require('/home/ccuser/.babelscripts/react-transform-component-exports');

var _reactTransformComponentExports2 = _interopRequireDefault(_reactTransformComponentExports);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Enthused = require('./Enthused');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  App: {
    displayName: 'App'
  }
};

var _homeCcuserBabelscriptsReactTransformComponentExports2 = (0, _reactTransformComponentExports2.default)({
  filename: '/home/ccuser/workspace/react-102-updating-unmounting-lifecycle-methods-componentwillunmount/App.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _homeCcuserBabelscriptsReactTransformComponentExports2(Component, id);
  };
}

var App = exports.App = _wrapComponent('App')(function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      enthused: false,
      text: ''
    };

    _this.toggleEnthusiasm = _this.toggleEnthusiasm.bind(_this);
    _this.addText = _this.addText.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'toggleEnthusiasm',
    value: function toggleEnthusiasm() {
      this.setState({
        enthused: !this.state.enthused
      });
    }
  }, {
    key: 'setText',
    value: function setText(text) {
      this.setState({ text: text });
    }
  }, {
    key: 'addText',
    value: function addText(newText) {
      var text = this.state.text + newText;
      this.setState({ text: text });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      this.setText(e.target.value);
    }
  }, {
    key: 'render',
    value: function render() {
      var button = void 0;
      if (this.state.enthused) {
        button = _react3.default.createElement(_Enthused.Enthused, { toggle: this.toggleEnthusiasm, addText: this.addText });
      } else {
        button = _react3.default.createElement(
          'button',
          { onClick: this.toggleEnthusiasm },
          'Add Enthusiasm!'
        );
      }

      return _react3.default.createElement(
        'div',
        null,
        _react3.default.createElement(
          'h1',
          null,
          'Auto-Enthusiasm'
        ),
        _react3.default.createElement('textarea', { rows: '7', cols: '40', value: this.state.text,
          onChange: this.handleChange }),
        button,
        _react3.default.createElement(
          'h2',
          null,
          this.state.text
        )
      );
    }
  }]);

  return App;
}(_react3.default.Component));

_reactDom2.default.render(_react3.default.createElement(App, null), document.getElementById('app'));

},{"./Enthused":3,"/home/ccuser/.babelscripts/react-transform-component-exports":1,"react":undefined,"react-dom":undefined}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Enthused = undefined;

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformComponentExports = require('/home/ccuser/.babelscripts/react-transform-component-exports');

var _reactTransformComponentExports2 = _interopRequireDefault(_reactTransformComponentExports);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Enthused: {
    displayName: 'Enthused'
  }
};

var _homeCcuserBabelscriptsReactTransformComponentExports2 = (0, _reactTransformComponentExports2.default)({
  filename: '/home/ccuser/workspace/react-102-updating-unmounting-lifecycle-methods-componentwillunmount/Enthused.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _homeCcuserBabelscriptsReactTransformComponentExports2(Component, id);
  };
}

var Enthused = exports.Enthused = _wrapComponent('Enthused')(function (_React$Component) {
  _inherits(Enthused, _React$Component);

  function Enthused() {
    _classCallCheck(this, Enthused);

    return _possibleConstructorReturn(this, (Enthused.__proto__ || Object.getPrototypeOf(Enthused)).apply(this, arguments));
  }

  _createClass(Enthused, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.interval = setInterval(function () {
        _this2.props.addText('!');
      }, 15);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount(prevProps, prevState) {
      clearInterval(this.interval);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        'button',
        { onClick: this.props.toggle },
        'Stop!'
      );
    }
  }]);

  return Enthused;
}(_react3.default.Component));

},{"/home/ccuser/.babelscripts/react-transform-component-exports":1,"react":undefined}]},{},[2]);