const React = require('react');
const ReactDOM = require('react-dom');

const MineSearch = require('./MineSearch'); // module.exports 한 것

ReactDOM.render(<MineSearch/>, document.querySelector('#root'));