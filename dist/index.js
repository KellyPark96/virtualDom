"use strict";

/** @jsx h */
function h(type, props) {
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  return {
    type: type,
    props: props,
    children: children.flat()
  };
}

var vm = React.DOM.div({
  id: "app"
}, React.DOM.ul(null, React.DOM.li(null, React.DOM.input({
  type: "checkbox",
  "class": "toggle"
}), "todo list item 1", React.DOM.button({
  "class": "remove"
}, "\uC0AD\uC81C")), React.DOM.li({
  "class": "completed"
}, React.DOM.input({
  type: "checkbox",
  "class": "toggle",
  checked: true
}), "todo list item 2", React.DOM.button({
  "class": "remove"
}, "\uC0AD\uC81C"))), React.DOM.form(null, React.DOM.input({
  type: "text"
}), React.DOM.button({
  type: "submit"
}, "\uCD94\uAC00")));
var $root = document.body.querySelector("#root");
$root.innerHTML = "\n    <pre>".concat(JSON.stringify(vm, null, 2), "</pre>\n");