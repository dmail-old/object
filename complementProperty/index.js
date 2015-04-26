require('../implementProperty');

function complementProperty(object, name, value, force){
	if( force || !(name in object) ){
		Object.implementProperty(object, name, value);
	}
}

module.exports = complementProperty;
Object.complementProperty = complementProperty;