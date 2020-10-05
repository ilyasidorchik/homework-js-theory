'use strict';

const array = [1, 2, 3];
const object = {
  1: 1,
  2: 2,
  3: 3,
};

/**
 * 1
 */
console.log('1');
console.log(Array.isArray(array)); // true
console.log(Array.isArray(object)); // false

/**
 * 2
 */
console.log('\n2');
console.log(array instanceof Array); // true
console.log(object instanceof Array); // false

/**
 * 3
 *
 * All arrays are objects,
 * so checking the constructor property is
 * a fast process for JavaScript engines
 */
console.log('\n3');
console.log(array.constructor === Array); // true
console.log(object.constructor === Array); // false

/**
 * 4
 */
console.log('\n4');
console.log(Object.prototype.toString.call(array) === '[object Array]'); // true
console.log(Object.prototype.toString.call(object) === '[object Array]'); // false

/**
 * 5
 */
console.log('\n5');
console.log(array.__proto__ === Array.prototype); // true
console.log(object.__proto__ === Array.prototype); // false
