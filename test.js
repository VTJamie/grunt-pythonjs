var pythonjs = require('python-js');

var javascript = pythonjs.translator.to_javascript("#python comment");

console.log(javascript);
