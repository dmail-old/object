var ObjectModifier = require('../object-modifier');
var completePropertyOf = require('./completePropertyOf');
var complete = ObjectModifier.create(completePropertyOf);

module.exports = complete;
Object.complete = complete;