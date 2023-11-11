"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./modal.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ModalToast(_ref) {
  var message = _ref.message,
    isVisible = _ref.isVisible,
    onClose = _ref.onClose,
    _ref$backgroundColor = _ref.backgroundColor,
    backgroundColor = _ref$backgroundColor === void 0 ? '#199260' : _ref$backgroundColor,
    _ref$timerColor = _ref.timerColor,
    timerColor = _ref$timerColor === void 0 ? '#7fca00' : _ref$timerColor,
    _ref$duration = _ref.duration,
    duration = _ref$duration === void 0 ? 5000 : _ref$duration;
  var _useState = (0, _react.useState)(duration),
    _useState2 = _slicedToArray(_useState, 2),
    timeLeft = _useState2[0],
    setTimeLeft = _useState2[1];
  var intervalDuration = 50; // 50ms pour mettre à jour le pourcentage
  var percentage = timeLeft / duration * 100;
  var modalStyle = {
    backgroundColor: backgroundColor
  };
  var timerStyle = {
    width: "".concat(percentage, "%"),
    backgroundColor: timerColor
  };
  (0, _react.useEffect)(function () {
    if (timeLeft <= 0) {
      onClose(); // Ferme la modale lorsque le timer est terminé
      return;
    }
    var intervalId = setInterval(function () {
      setTimeLeft(function (prevTime) {
        return prevTime - intervalDuration;
      });
    }, intervalDuration);
    return function () {
      return clearInterval(intervalId);
    }; // N'oubliez pas de nettoyer l'intervalle !
  }, [timeLeft, onClose]);
  if (!isVisible) return null;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-toast",
    style: modalStyle
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "modal-toast-message"
  }, message), /*#__PURE__*/_react["default"].createElement("button", {
    className: "modal-toast-close",
    onClick: onClose
  }, "\xD7"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-toast-timer",
    style: timerStyle
  }));
}
var _default = exports["default"] = ModalToast;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJlIiwiV2Vha01hcCIsInIiLCJ0IiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJoYXMiLCJnZXQiLCJuIiwiX19wcm90b19fIiwiYSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwidSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImkiLCJzZXQiLCJfc2xpY2VkVG9BcnJheSIsImFyciIsIl9hcnJheVdpdGhIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVJlc3QiLCJUeXBlRXJyb3IiLCJvIiwibWluTGVuIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJ0b1N0cmluZyIsInNsaWNlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiQXJyYXkiLCJmcm9tIiwidGVzdCIsImxlbiIsImxlbmd0aCIsImFycjIiLCJsIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJmIiwibmV4dCIsImRvbmUiLCJwdXNoIiwidmFsdWUiLCJpc0FycmF5IiwiTW9kYWxUb2FzdCIsIl9yZWYiLCJtZXNzYWdlIiwiaXNWaXNpYmxlIiwib25DbG9zZSIsIl9yZWYkYmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiX3JlZiR0aW1lckNvbG9yIiwidGltZXJDb2xvciIsIl9yZWYkZHVyYXRpb24iLCJkdXJhdGlvbiIsIl91c2VTdGF0ZSIsInVzZVN0YXRlIiwiX3VzZVN0YXRlMiIsInRpbWVMZWZ0Iiwic2V0VGltZUxlZnQiLCJpbnRlcnZhbER1cmF0aW9uIiwicGVyY2VudGFnZSIsIm1vZGFsU3R5bGUiLCJ0aW1lclN0eWxlIiwid2lkdGgiLCJjb25jYXQiLCJ1c2VFZmZlY3QiLCJpbnRlcnZhbElkIiwic2V0SW50ZXJ2YWwiLCJwcmV2VGltZSIsImNsZWFySW50ZXJ2YWwiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJvbkNsaWNrIiwiX2RlZmF1bHQiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudC9tb2RhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9tb2RhbC5jc3MnXG5cbmZ1bmN0aW9uIE1vZGFsVG9hc3QoeyBtZXNzYWdlLCBpc1Zpc2libGUsIG9uQ2xvc2UsIGJhY2tncm91bmRDb2xvciA9ICcjMTk5MjYwJywgdGltZXJDb2xvciA9ICcjN2ZjYTAwJywgZHVyYXRpb24gPSA1MDAwIH0pIHtcbiAgICBjb25zdCBbdGltZUxlZnQsIHNldFRpbWVMZWZ0XSA9IHVzZVN0YXRlKGR1cmF0aW9uKTtcbiAgICBjb25zdCBpbnRlcnZhbER1cmF0aW9uID0gNTA7IC8vIDUwbXMgcG91ciBtZXR0cmUgw6Agam91ciBsZSBwb3VyY2VudGFnZVxuICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSAodGltZUxlZnQgLyBkdXJhdGlvbikgKiAxMDA7XG4gICAgY29uc3QgbW9kYWxTdHlsZSA9IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBiYWNrZ3JvdW5kQ29sb3IsXG4gICAgfTtcbiAgICBjb25zdCB0aW1lclN0eWxlID0ge1xuICAgICAgICB3aWR0aDogYCR7cGVyY2VudGFnZX0lYCxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aW1lckNvbG9yLFxuICAgIH07XG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICh0aW1lTGVmdCA8PSAwKSB7XG4gICAgICAgICAgICBvbkNsb3NlKCk7IC8vIEZlcm1lIGxhIG1vZGFsZSBsb3JzcXVlIGxlIHRpbWVyIGVzdCB0ZXJtaW7DqVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVMZWZ0KHByZXZUaW1lID0+IHByZXZUaW1lIC0gaW50ZXJ2YWxEdXJhdGlvbik7XG4gICAgICAgIH0sIGludGVydmFsRHVyYXRpb24pO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsSWQpOyAvLyBOJ291YmxpZXogcGFzIGRlIG5ldHRveWVyIGwnaW50ZXJ2YWxsZSAhXG4gICAgfSwgW3RpbWVMZWZ0LCBvbkNsb3NlXSk7XG5cbiAgICBpZiAoIWlzVmlzaWJsZSkgcmV0dXJuIG51bGw7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLXRvYXN0XCIgc3R5bGU9e21vZGFsU3R5bGV9PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibW9kYWwtdG9hc3QtbWVzc2FnZVwiPnttZXNzYWdlfTwvc3Bhbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibW9kYWwtdG9hc3QtY2xvc2VcIiBvbkNsaWNrPXtvbkNsb3NlfT4mdGltZXM7PC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLXRvYXN0LXRpbWVyXCIgc3R5bGU9e3RpbWVyU3R5bGV9PjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbFRvYXN0OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLElBQUFBLE1BQUEsR0FBQUMsdUJBQUEsQ0FBQUMsT0FBQTtBQUNBQSxPQUFBO0FBQW9CLFNBQUFDLHlCQUFBQyxDQUFBLDZCQUFBQyxPQUFBLG1CQUFBQyxDQUFBLE9BQUFELE9BQUEsSUFBQUUsQ0FBQSxPQUFBRixPQUFBLFlBQUFGLHdCQUFBLFlBQUFBLHlCQUFBQyxDQUFBLFdBQUFBLENBQUEsR0FBQUcsQ0FBQSxHQUFBRCxDQUFBLEtBQUFGLENB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