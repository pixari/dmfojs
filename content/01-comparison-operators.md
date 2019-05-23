# Comparison operators

## 1. Why NaN isn't equal to NaN?

> Example:
```js
NaN === NaN; // false
NaN == NaN; // false
```

### Explanation

This behavior is specified by [ECMA-262](http://www.ecma-international.org/ecma-262) in _Abstract Equality Comparison_ and _Abstract Equality Comparison_ sections. In both comparisons, wheter strict (`===`) or not (`==`), if any of the operand is `NaN` the result is `false`. The pseudo code mentionned is as follows :

```
1. If Type(x) is different from Type(y), return false.
2. If Type(x) is Number, then
  1. If x is NaN, return false.
  2. If y is NaN, return false.
```

This is inherited from [IEEE 754](https://en.wikipedia.org/wiki/IEEE_754), the IEEE standard for floating-point arithmetic, which states that any operation performed on `NaN` should yield a false value or raise an error.

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

### Explanation
<b>TL;DR: </b>This is javascript way of evaluating above expressions and the reason for such wierd results
![Img](https://i.imgur.com/tlWKy1l.gif)
 
Generally the expression 3>2>1 is expected to return true since it is mathematically correct. But as javascript is a weak typed language, the evaluation of the above expression is done a bit differently. So lets break the evaluation down to 3 fundamental steps 
  1. ### Operator Precedence
     There are 2 operators(>,>) used in this expression (3>2>1) which have the same precedence. So the expression is evaluated from left to right as per [Operator precedence table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table) 
  2. ### Evaluation of left most expression
      The left most expression in `3>2>1` is `3>2`. Javascript evaluates this expression and returns `true` as 3 is greater than 2. Hence we are left with the expression `true>1`
  3. ### Implcit conversion
      Javascript now evaluates the left out expression i.e., `true>1`. As Javascript is weakly typed language, instead of throwing an error for operands of different types , it implicitly converts `true` to `1`. So the expression is transformed to `1>1` which is obviously false. Hence the value is returned as false.
      
These are the steps that are followed to evaluate the expression and are the main reason for the weird results like the below ones
```js
3>2>=1 //true
0<3<2 //true
```
 
