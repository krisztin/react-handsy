'use strict';

var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;


var style = {
  backgroundCOlor: 'red'
};

render(React.createElement(
  'h1',
  { id: 'title',
    className: 'header',
    style: style },
  'Hello World'
), document.querySelector('body'));
