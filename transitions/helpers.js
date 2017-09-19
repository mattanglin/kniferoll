"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Transition helpers
 */
var getEnter = exports.getEnter = function getEnter(timeout) {
  return timeout.enter || timeout;
};
var getExit = exports.getExit = function getExit(timeout) {
  return timeout.exit || timeout;
};