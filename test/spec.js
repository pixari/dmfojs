describe(`Chapter 1 - Comparison`, () => {
  it(`NaN isn't equal to NaN`, () => {
    expect(NaN === NaN).toBeFalsy();
    expect(NaN == NaN).toBeFalsy();
  });
  it(`[] == ![] but [] == []`, () => {
    expect([] == ![]).toBeTruthy();
    expect([] == []).toBeFalsy();
  });
  it(`Does the new String(...) makes any sense?`, () => {
    let str = new String("foo"); // String {"foo"}
    expect(typeof str).toBe("object");
    expect(typeof "foo").toBe("string"); // 'foo'

    expect(str)
      .toEqual("foo")
      .not.toBe("foo");
  });
  it(`As Javascript is weakly typed language, instead of throwing an error for operands of different types , it implicitly converts true to 1`, () => {
    expect(1 < 2 < 3).toBeTruthy();
    expect(3 > 2 > 1).toBeFalsy();
  });
});
describe(`Chapter 2 - Arithmetic operators`, () => {
  it(`This format cannot represent the numbers like 0.1 or 0.2 accurately because they store the numbers in binary and floating number cannot store all the decimal numbers properly`, () => {
    const adding = 0.1 + 0.2;
    expect(adding).not.toBe(0.3);
    expect(+adding.toFixed(1)).toBe(0.3);
  });
});
describe(`Chapter 3 -Types`, () => {
  it(`NaN is a number`, () => {
    expect(typeof NaN).toBe("number");
    expect(isNaN(NaN)).toBeTruthy();
  });
  it(`Conversion to String()`, () => {
    expect(String(null)).toBe("null");
    expect(String(undefined)).toBe("undefined");
    expect(String([null]))
      .toBe(String([undefined]))
      .toBe("");
  });
  it(`Conversion to Number()`, () => {
    expect(Number(null)).toBe(0);
    expect(Number(undefined)).toBe(NaN);
    expect(Number([null])).toBe(0);
    expect(Number([undefined])).toBe(0);
  });
});
describe(`Chapter 4 - operators`, () => {});
it(`What is the double negation?`, () => {
  expect(!!true)
    .toBe(!!new Boolean(true))
    .toBe(!!new Boolean(false))
    .toBeTruthy();
  expect(!!false).toBeFalsy();
});
it(`The logical operator && is evaluated from left to right and the evaluation stops once it finds a falsy value and returns the operand that has falsy value. If no falsy value is present then the last operand is returned.`, () => {
  expect(true && "Hello world" && 2).toBe(2);
  expect(54.3 && false && 3).toBe(false);
  expect("" && 1).toBe("");
  expect(2 && "hi" && null).toBe(null);
  expect(true || "Hello world" || 2).toBe(true);
  expect(false || 3 || 54.3).toBe(3);
  expect("" || 1).toBe(1);
  expect("" || undefined || null).toBe(null);
});
describe(`Chapter 5 - Arrays`, () => {
  it(`What's Array(k) really doing?`, () => {
    const a = Array(3);
    const b = Array.apply(null, Array(3));
    expect(a)
      .toEqual(b)
      .toEqual([undefined, undefined, undefined]);
    expect(a[2])
      .toEqual(b[2])
      .toBeUndefined(); // undefined
    expect(a.length)
      .toBe(b.length)
      .toBe(3); // 3
    expect(a.map((v, idx) => idx)).toEqual([undefined, undefined, undefined]); // [ ]

    expect(b.map((v, idx) => idx)).toEqual([0, 1, 2]);
  });
});
