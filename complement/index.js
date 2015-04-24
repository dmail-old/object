var ObjectModifier = require('../object-modifier');
var complementPropertyOf = require('./complementPropertyOf');
var complement = ObjectModifier.create(complementPropertyOf);

module.exports = complement;
Object.complement = complement;