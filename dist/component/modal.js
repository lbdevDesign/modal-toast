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
    _ref$duration = _ref.duration,
    duration = _ref$duration === void 0 ? 5000 : _ref$duration;
  var _useState = (0, _react.useState)(duration),
    _useState2 = _slicedToArray(_useState, 2),
    timeLeft = _useState2[0],
    setTimeLeft = _useState2[1];
  var intervalDuration = 50; // 50ms pour mettre à jour le pourcentage
  var percentage = timeLeft / duration * 100;
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
    className: "modal-toast"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "modal-toast-message"
  }, message), /*#__PURE__*/_react["default"].createElement("button", {
    className: "modal-toast-close",
    onClick: onClose
  }, "\xD7"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-toast-timer",
    style: {
      width: "".concat(percentage, "%")
    }
  }));
}
var _default = exports["default"] = ModalToast;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJlIiwiV2Vha01hcCIsInIiLCJ0IiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJoYXMiLCJnZXQiLCJuIiwiX19wcm90b19fIiwiYSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwidSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImkiLCJzZXQiLCJfc2xpY2VkVG9BcnJheSIsImFyciIsIl9hcnJheVdpdGhIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVJlc3QiLCJUeXBlRXJyb3IiLCJvIiwibWluTGVuIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJ0b1N0cmluZyIsInNsaWNlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiQXJyYXkiLCJmcm9tIiwidGVzdCIsImxlbiIsImxlbmd0aCIsImFycjIiLCJsIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJmIiwibmV4dCIsImRvbmUiLCJwdXNoIiwidmFsdWUiLCJpc0FycmF5IiwiTW9kYWxUb2FzdCIsIl9yZWYiLCJtZXNzYWdlIiwiaXNWaXNpYmxlIiwib25DbG9zZSIsIl9yZWYkZHVyYXRpb24iLCJkdXJhdGlvbiIsIl91c2VTdGF0ZSIsInVzZVN0YXRlIiwiX3VzZVN0YXRlMiIsInRpbWVMZWZ0Iiwic2V0VGltZUxlZnQiLCJpbnRlcnZhbER1cmF0aW9uIiwicGVyY2VudGFnZSIsInVzZUVmZmVjdCIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbCIsInByZXZUaW1lIiwiY2xlYXJJbnRlcnZhbCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwic3R5bGUiLCJ3aWR0aCIsImNvbmNhdCIsIl9kZWZhdWx0IiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnQvbW9kYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vbW9kYWwuY3NzJ1xuXG5mdW5jdGlvbiBNb2RhbFRvYXN0KHsgbWVzc2FnZSwgaXNWaXNpYmxlLCBvbkNsb3NlLCBkdXJhdGlvbiA9IDUwMDAgfSkge1xuICAgIGNvbnN0IFt0aW1lTGVmdCwgc2V0VGltZUxlZnRdID0gdXNlU3RhdGUoZHVyYXRpb24pO1xuICAgIGNvbnN0IGludGVydmFsRHVyYXRpb24gPSA1MDsgLy8gNTBtcyBwb3VyIG1ldHRyZSDDoCBqb3VyIGxlIHBvdXJjZW50YWdlXG4gICAgY29uc3QgcGVyY2VudGFnZSA9ICh0aW1lTGVmdCAvIGR1cmF0aW9uKSAqIDEwMDtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICh0aW1lTGVmdCA8PSAwKSB7XG4gICAgICAgICAgICBvbkNsb3NlKCk7IC8vIEZlcm1lIGxhIG1vZGFsZSBsb3JzcXVlIGxlIHRpbWVyIGVzdCB0ZXJtaW7DqVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVMZWZ0KHByZXZUaW1lID0+IHByZXZUaW1lIC0gaW50ZXJ2YWxEdXJhdGlvbik7XG4gICAgICAgIH0sIGludGVydmFsRHVyYXRpb24pO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsSWQpOyAvLyBOJ291YmxpZXogcGFzIGRlIG5ldHRveWVyIGwnaW50ZXJ2YWxsZSAhXG4gICAgfSwgW3RpbWVMZWZ0LCBvbkNsb3NlXSk7XG5cbiAgICBpZiAoIWlzVmlzaWJsZSkgcmV0dXJuIG51bGw7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLXRvYXN0XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtb2RhbC10b2FzdC1tZXNzYWdlXCI+e21lc3NhZ2V9PC9zcGFuPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtb2RhbC10b2FzdC1jbG9zZVwiIG9uQ2xpY2s9e29uQ2xvc2V9PiZ0aW1lczs8L2J1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtdG9hc3QtdGltZXJcIiBzdHlsZT17eyB3aWR0aDogYCR7cGVyY2VudGFnZX0lYCB9fT48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxUb2FzdDsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxJQUFBQSxNQUFBLEdBQUFDLHVCQUFBLENBQUFDLE9BQUE7QUFDQUEsT0FBQTtBQUFvQixTQUFBQyx5QkFBQUMsQ0FBQSw2QkFBQUMsT0FBQSxtQkFBQUMsQ0FBQSxPQUFBRCxPQUFBLElBQUFFLENBQUEsT0FBQUYsT0FBQSxZQUFBRix3QkFBQSxZQUFBQSx5QkFBQUMsQ0FBQSxXQUFBQSxDQUFBLEdBQUFHLENBQUEsR0FBQUQsQ0FBQSxLQUFBRixDQUFBO0FBQUEsU0FBQUgsd0JBQUFHLENBQUEsRUFBQUUsQ0FBQSxTQUFBQSxDQUFBLElBQUFGLENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxVQUFBLFNBQUFKLENBQUEsZUFBQUEsQ0FBQSxnQkFBQUssT0FBQSxDQUFBTCxDQUFBLDBCQUFBQSxDQUFBLHNCQUFBQSxDQUFBLFFBQUFHLENBQUEsR0FBQUosd0JBQUEsQ0FBQUcsQ0FBQSxPQUFBQyxDQUFBLElBQUFBLENBQUEsQ0FBQUcsR0FBQSxDQUFBTixDQUFBLFVBQUFHLENBQUEsQ0FBQUksR0FBQSxDQUFBUCxDQUFBLE9BQUFRLENBQUEsS0FBQUMsU0FBQSxVQUFBQyxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsY0FBQSxJQUFBRCxNQUFBLENBQUFFLHdCQUFB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