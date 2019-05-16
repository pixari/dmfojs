# Arrays

## 1. What's Array(k) really doing?

> Example:
```js
var a = Array( 3 );
a; // []
a[2];  // undefined
a.length; // 3
a.map( (v,idx)=>idx ); // [ ]

var b = Array.apply( null, Array(3) );
b; // [undefined,undefined,undefined]
b[2];   // undefined
b.length; // 3
b.map( (v,idx)=>idx ); // [0,1,2]
```

TODO: explanation