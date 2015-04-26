require('../complement');
require('../complementProperty');
require('../complete');
require('../completeProperty');

var rootScope = typeof window == 'undefined' ? global : window;
var polyfill = function(object, name, value, force){
	if( object === 'global' ){
		object = rootScope;
	}

	name = typeof name == 'symbol' ? name.toString() : String(name);

	if( arguments.length === 2 ){
		if( object === Array.prototype || object ==  String.prototype ){
			Object.complement(object, name);
		}
		else{
			Object.complete(object, name);
		}
	}
	else{
		if( object === Array.prototype || object == String.prototype ){
			Object.complementProperty(object, name, value, force);
		}
		else{
			Object.completeProperty(object, name, value, force);
		}
	}
};

module.exports = polyfill;
Object.polyfill = polyfill;