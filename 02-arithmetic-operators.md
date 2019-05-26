# Chapter 2 - Arithmetic operators

<div align="center">
  <img src="assets/undraw_mathematics_4otb.svg" alt="Arithmetic operators" width="400"/>
  <br>
  <p>
    <em>Credits: illustration by <a href="https://undraw.co/">unDraw</a></em>
  </p>
</div>

## 1. Why 0.1 + 0.2 = 0.300000004?

> Example:
```js
0.1 + 0.2; // 0.300000004
```

### Explanation
This is not just a javascript language limitation but also a  limitation for many other programming languages(C or Java or C++) . This is a problem with the format(IEEE 754 -binary floating point) that computers internally use to represent the numbers. This format cannot represent the numbers like 0.1 or 0.2 accurately because they store the numbers in binary and floating number cannot store all the decimal numbers properly
For Example, 0.1 would be coverted in the following way
```
0.1 = 1/10 => 1/16 + (1/10-1/16) => 1/32 + (0.0375-1/32) ....so on 
and the ultimate result would be around 0.1000000000000000055511151231257827021181583404541015625
```
So when the code is compiled or transpiled or interpreted,0.1 will be rounded/chopped off to nearest number in the representable binary format and hence when arithmetic operations are performed , there can be small rounding errors .Hence we   get 0.300000004 instead of 0.3, when we add 0.1 and 0.2 . For more detailed explanation,check out this [paper by David Goldberg](https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html)
and [article](https://blog.angularindepth.com/javascripts-number-type-8d59199db1b6)

### Fix 
There is a simple fix to this issue as shown below
```javascript
var a = 0.1+0.2 //0.300000004
var b = +(0.1+0.2).toFixed(1);//round off to avoid errorneous value and convert it back to number by using +
//b = 0.3
```


