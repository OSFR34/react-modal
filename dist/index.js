function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var styles = {"modalshow":"_kjKgX","modalhide":"_2kmzk","modalbody":"_10Akc","close":"_2I1sI","modaltitle":"_2Kk9i","modalcontent":"_2flQG"};

function Modal(_ref) {
  var _ref$show = _ref.show,
      show = _ref$show === void 0 ? false : _ref$show,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? "Modal Title" : _ref$title,
      _ref$content = _ref.content,
      content = _ref$content === void 0 ? 'Modal Content' : _ref$content;

  return /*#__PURE__*/React.createElement("div", {
    className: show ? styles.modalshow : styles.modalhide
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.modalbody
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.modaltitle
  }, title), /*#__PURE__*/React.createElement("div", {
    className: styles.modalcontent
  }, content), /*#__PURE__*/React.createElement("a", {
    className: styles.close
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "1",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "class": "feather feather-x-circle"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "15",
    y1: "9",
    x2: "9",
    y2: "15"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "9",
    y1: "9",
    x2: "15",
    y2: "15"
  })))));
}

module.exports = Modal;
//# sourceMappingURL=index.js.map
