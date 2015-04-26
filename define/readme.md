# define

Works like Object.assign (see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) but use defineProperty instead of direct assignation

```javascript
require('object/assign');
require('object/define');

var item = {
	get name(){
		console.log('wtf?');
		return null;
	}
};

Object.assign({}, item); // logs 'wtf?'
Object.define({}, item); // console.log is not called
```