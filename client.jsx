const React = require('react');
const ReactDom = require('react-dom');

const WordRelay = require('./WordRelay'); // module.exports 한 것

ReactDom.render(<WordRelay/>, document.querySelector('#root'));