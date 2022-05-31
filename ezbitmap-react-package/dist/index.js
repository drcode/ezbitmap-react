"use strict";

var _interopRequireDefault = require("/home/drcode/ezbitmap-react/ezbitmap-react-package/node_modules/@babel/runtime/helpers/interopRequireDefault.js")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("/home/drcode/ezbitmap-react/ezbitmap-react-package/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));

var _slicedToArray2 = _interopRequireDefault(require("/home/drcode/ezbitmap-react/ezbitmap-react-package/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"));

var _ezbitmap = _interopRequireDefault(require("@lisperati/ezbitmap"));

var _react = _interopRequireDefault(require("react"));

function Ezbitmap(props) {
  var ref = _react["default"].useRef(null);

  var ascii = props.children;

  var _React$useState = _react["default"].useState(),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      image = _React$useState2[0],
      setImage = _React$useState2[1];

  var width = image ? image.width : 0;
  var height = image ? image.height : 0;

  _react["default"].useEffect(function () {
    var image = (0, _ezbitmap["default"])(ascii, {
      debugging: props.debugging
    });
    setImage(image);
  }, [ascii, props.debugging]);

  _react["default"].useEffect(function () {
    if (!image) return;
    var context = ref.current.getContext('2d');
    context.imageSmoothingEnabled = false;
    context.putImageData(image, 0, 0);
  }, [image]);

  return /*#__PURE__*/_react["default"].createElement("canvas", {
    style: (0, _objectSpread2["default"])((0, _objectSpread2["default"])({
      imageRendering: "pixelated"
    }, props.style), props.bigPixels ? {
      width: width * 4,
      height: height * 4
    } : {}),
    onClick: props.onClick,
    width: width,
    height: height,
    ref: ref
  });
}

var _default = Ezbitmap;
exports["default"] = _default;