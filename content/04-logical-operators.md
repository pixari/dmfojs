# Logical operators

## 1. What is the double negation?

> Example:
```js
!!true;        // true
!!false;       // false
!!(new Boolean(true));     // true
!!(new Boolean(false));     /
```

TODO: explanation

## 2. Why && and || do not return a boolean value like other languages ?

> Example:
```js
true && "Hello world" && 2   // 2
54.3 && false && 3           // false
"" && 1                      // ""
2 && "hi" && null            // null
```

```js
true || "Hello world" || 2   // true
false || 3 || 54.3           // 3
"" || 1                      // 1
"" || undefined || null      // null
```

### Explanation

JavaScript coerces the operand value to boolean value to determine the value of a logical operation. If a value can be converted to true, the value is so-called truthy. If a value can be converted to false, the value is so-called falsy.

**The logical operator && is evaluated from left to right and the evaluation stops once it finds a falsy value and returns the operand that has falsy value. If no falsy value is present then the last operand is returned.**
* _In example 1_, all values are truthy hence last operand `2` is returned
* _In example 2_, first value is truthy but as soon as second operand is evaluated it returned falsy value, hence `false` is returned
* _In example 3_, "" is falsy hence evaluation stopped and next operand is not evaluated and `""` returned
* _In example 4_, the first two operands are truthy but the last one is falsy hence `null` returned

The logical operator || is the reverse of &&.

**The logical operator || is evaluated from left to right and the evaluation stops once it finds a truthy value and returns the operand that has truthy value. If no truthy value is present then the last operand is returned.**
* _In example 1_, the first operand has truthy value hence further operands are not evaluated and `true` is returned
* _In example 2_, first value is falsy but as soon as second operand is evaluated it returned truthy value, hence `3` is returned
* _In example 3_, "" is falsy hence evaluation moved forward  and `1` returned
* _In example 4_, all the operands are false hence `null` is returned


