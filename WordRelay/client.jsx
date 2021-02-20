const React = require('react');
const ReactDOM = require('react-dom');

const WordRelay = require('./WordRelay'); // module.exports 한 것

ReactDOM.render(<WordRelay/>, document.querySelector('#root'));