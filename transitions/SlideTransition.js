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

var defaultSlide = 'up';
var defaultTimeout = 300;
var defaultPercent = 100;
var getTranslate = function getTranslate() {
  var slideDirection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSlide;
  var enterOrExit = arguments[1];
  var percent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultPercent;

  var slide = slideDirection[enterOrExit] || slideDirection;

  switch (slide) {
    case 'up':
      return 'translate(0%, -' + percent + '%)';
    case 'right':
      return 'translate(' + percent + '%, 0%)';
    case 'down':
      return 'translate(0%, ' + percent + '%)';
    case 'left':
      return 'translate(-' + percent + '%, 0%)';
    default:
  }
};

/**
 * Slide in/out transform transition
 */
var SlideTransition = function SlideTransition(_ref) {
  var className = _ref.className,
      slideDirection = _ref.slideDirection,
      slidePercent = _ref.slidePercent,
      timeout = _ref.timeout,
      rest = (0, _objectWithoutProperties3.default)(_ref, ['className', 'slideDirection', 'slidePercent', 'timeout']);
  return _react2.default.createElement(
    'div',
    { className: className },
    console.log('SLIDE:', className, slideDirection, slidePercent, timeout, rest),
    _react2.default.createElement(_reactTransitionGroup.CSSTransition, (0, _extends3.default)({}, rest, {
      classNames: 'slide',
      timeout: timeout
    }))
  );
};

SlideTransition.propTypes = {
  className: _propTypes2.default.string,
  slideDirection: _propTypes2.default.oneOfType([_propTypes2.default.oneOf(['up', 'right', 'down', 'left']), _propTypes2.default.shape({
    enter: _propTypes2.default.oneOf(['up', 'right', 'down', 'left']),
    exit: _propTypes2.default.oneOf(['up', 'right', 'down', 'left'])
  })]),
  slidePercent: _propTypes2.default.number,
  /**
   * How long to fade in/out
   */
  timeout: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.shape({
    enter: _propTypes2.default.number,
    exit: _propTypes2.default.number
  })]).isRequired
};
SlideTransition.defaultProps = {
  slideDirection: defaultSlide,
  slidePercent: defaultPercent,
  timeout: defaultTimeout
};

var mapTransitionStyle = exports.mapTransitionStyle = function mapTransitionStyle(_ref2) {
  var slideDirection = _ref2.slideDirection,
      slidePercent = _ref2.slidePercent,
      _ref2$timeout = _ref2.timeout,
      timeout = _ref2$timeout === undefined ? defaultTimeout : _ref2$timeout;

  var enter = helpers.getEnter(timeout);
  var exit = helpers.getExit(timeout);

  return {
    '& .slide-enter': {
      transform: getTranslate(slideDirection, 'enter', slidePercent)
    },
    '& .slide-enter.slide-enter-active': {
      transform: 'translate(0%, 0%)',
      transition: 'transform ' + enter + 'ms ease-in-out'
    },
    '& .slide-exit': {
      transform: 'translate(0%, 0%)'
    },
    '& .slide-exit.slide-exit-active': {
      transform: getTranslate(slideDirection, 'exit', slidePercent),
      transition: 'transform ' + exit + 'ms ease-in-out'
    }
  };
};

exports.default = (0, _glamorous2.default)(SlideTransition)(mapTransitionStyle);