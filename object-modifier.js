var ObjectModifier = {
	modifyMany: function(setter, object){
		var i = 2, j = arguments.length, owner, keys, n, m;

		for(;i<j;i++){
			owner = arguments[i];
			if( Object(owner) != owner ) continue;
			keys = Object.keys(owner);
			n = 0;
			m = keys.length;

			for(;n<m;n++){
				setter(object, keys[n], owner);
			}
		}

		return object;
	},

	create: function(propertySetter){
		if( typeof propertySetter != 'function' ){
			throw new TypeError('ObjectModifier propertySetter must be a function, ' + propertySetter +' given');
		}

		return ObjectModifier.modifyMany.bind(ObjectModifier, propertySetter);
	}
};

module.exports = ObjectModifier;