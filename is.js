// Object.is polyfill, courtesy of @WebReflection

function is(a, b){
	return a === b ? a !== 0 || 1 / a == 1 / b : a != a && b != b;
}

module.exports = is;
require('object/polyfill')(Object, 'is', is);