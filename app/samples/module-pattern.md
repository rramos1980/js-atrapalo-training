# Modules in Javascript #


See: http://requirejs.org/docs/whyamd.html

One of the main problems is global scope pollution. All variables where declare on top level scope, window on browsers.

var a = {name: 'My object'};
var b = {name: 'Another object'}
...

later...

a = 1; // ooops

....

console.log(a.name) //error

# Self invoked functions to define a module #

´´´
(function (root) {

    // use local variables no polluting

    // export variable to global object
    root.a = {
        name: 'one object'
    };
}(this));
´´´

# AMD: Asyncronous module definitio #

define(function() {
    return {
        name: 'a defined module';
    }
});

Use the stack requirejs + bower

# commonjs #

Setting up api on exports property

exports.mymodule = {name: 'a commonjs module'};

and later:

var myModule = require('mymodule');

Use the stack: npm + browserify (http://browserify.org/)

# UMD: an unified module definition #

´´´
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.returnExports = factory();
  }
}(this, function () {
    return {};
}));
´´´
