var ObjectModifier = require('../object-modifier');
var implementPropertyOf = require('./implementPropertyOf');
var implement = ObjectModifier.create(implementPropertyOf);

module.exports = implement;
Object.implement = implement;