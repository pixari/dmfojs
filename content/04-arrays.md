# Chapter 5 - Arrays

<div align="center">
  <img src="../assets/undraw_logistics_x4dc.png" alt="Arrays" width="400"/>
  <br>
  <p>
    <em>Credits: illustration by <a href="https://undraw.co/">unDraw</a></em>
  </p>
</div>

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