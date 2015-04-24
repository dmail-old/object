var ObjectModifier = require('../object-modifier');
var definePropertyOf = require('./definePropertyOf');
var define = ObjectModifier.create(definePropertyOf);

module.exports = define;
Object.define = define;