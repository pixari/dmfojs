# Comparison operators

## 1. Why NaN isn't equal to NaN?

> Example:
```js
NaN === NaN; // false
NaN == NaN; // false
```

TODO: explanation

## 2. Why [] == ![] but [] == []?

> Example:
```js
[] == ![] // true
[] == [] // false
```

TODO: explanation

## 3. Does the new String(...) makes any sense?
 
> Example:
```js
new String('foo'); // String {"foo"}
typeof new String('foo'); // 'object'
'foo'; // 'foo'
typeof 'foo'; // 'string'

//but...

new String('foo') == 'foo'; // true
```

TODO: explanation

## 4. How does x < y < z / x > y > z works?
 
> Example:
```js
1 < 2 < 3; // true
3 > 2 > 1; // false
```

TODO: explanation

