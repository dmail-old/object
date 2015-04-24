function modifyOne(object, name, owner){
	object[name] = owner[name];
}

function modifyMany(object){
	var i = 1, j = arguments.length, owner, keys, n, m;

	for(;i<j;i++){
		owner = arguments[i];
		if( Object(owner) != owner ) continue;
		keys = Object.keys(owner);
		n = 0;
		m = keys.length;

		for(;n<m;n++){
			this(object, keys[n], owner);
		}
	}

	return object;
}

var ObjectModifier = {
	create: function(propertySetter){
		return modifyMany.bind(propertySetter || modifyOne);
	}
};

module.exports = ObjectModifier;