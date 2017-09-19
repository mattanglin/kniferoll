'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapTransitionStyle = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactTransitionGroup = require('react-transition-group');

var _glamorous = require('glamorous');

var _glamorous2 = _interopRequireDefault(_glamorous);

var _helpers = require('./helpers');

var helpers = _interopRequireWildcard(_helpers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultTimeout = 300;

/**
 * Simple opacity fade in/out transition
 */
var FadeTransition = function FadeTransition(_ref) {
  var className = _ref.className,
      timeout = _ref.timeout,
      rest = (0, _objectWithoutProperties3.default)(_ref, ['className', 'timeout']);
  return _react2.default.createElement(
    'div',
    { className: className },
    _react2.default.createElement(_reactTransitionGroup.CSSTransition, (0, _extends3.default)({}, rest, {
      classNames: 'fade',
      timeout: timeout
    }))
  );
};

FadeTransition.propTypes = {
  className: _propTypes2.default.string,
  /**
   * How long to fade in/out
   */
  timeout: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.shape({
    enter: _propTypes2.default.number,
    exit: _propTypes2.default.number
  })]).isRequired
};
FadeTransition.defaultProps = {
  timeout: defaultTimeout
};

var mapTransitionStyle = exports.mapTransitionStyle = function mapTransitionStyle(_ref2) {
  var _ref2$timeout = _ref2.timeout,
      timeout = _ref2$timeout === undefined ? defaultTimeout : _ref2$timeout;

  var enter = helpers.getEnter(timeout);
  var exit = helpers.getExit(timeout);

  return {
    '& .fade-enter': {
      opacity: 0
    },
    '& .fade-enter.fade-enter-active': {
      opacity: 1,
      transition: 'opacity ' + enter + 'ms ease-in-out'
    },
    '& .fade-exit': {
      opacity: 1
    },
    '& .fade-exit.fade-exit-active': {
      opacity: 0,
      transition: 'opacity ' + exit + 'ms ease-in-out'
    }
  };
};

exports.default = (0, _glamorous2.default)(FadeTransition)(mapTransitionStyle);