function assignPropertyOf(object, name, owner){
	object[name] = owner[name];
}

module.exports = assignPropertyOf;