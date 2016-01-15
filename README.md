# Functional Javascript Examples using Ramda


## Table of Contents

  1. [Introduction](#intro)
  1. [Currying](#currying)
  1. [Composing](#composing)

## Introduction
* We'll want to represent our specific problem in terms of generic, composable bits and then exploit their properties. It will take a bit more discipline than the "anything goes" approach of imperative programming , but the payoff of working within a principled, mathematical framework will astound you.

### Why not Underscore OR Lodash
* Ramda  makes it easy to create functional pipelines, one that never mutates user data.
* Ramda strives for performance. A reliable and quick implementation wins over any notions of functional purity.
* Underscore and Lodash offers some functional concepts like map, filter and reduce. But they dont encourage functional style for composition, currying etc.




## Currying
The concept is simple: You can call a function with fewer arguments than it expects. It returns a function that takes the remaining arguments.

```js
var add = function(x) {
  return function(y) {
    return x + y;
  };
};

var increment = add(1);
var addTen = add(10);

increment(2);
// 3

addTen(2);
// 12
```
### Ramda Examples :: [source](http://jsbin.com/dufewo)
```
/*****************************************
      C U R R Y I N G  E X A M P L E
******************************************/

// We've got a nice multiply function.
// It takes two arguments.

console.log( R.multiply(3, 4) );

// But it has been secretly curried already
// so we can feed it fewer arguments and it
// will return a new function.
//
// How about making a function to double a
// value? Done.
var double = R.multiply(2);

console.log( double(13) );
/*
Refered Documentation for Rambda for Functional Implementation.
Implemented examples for currying using map and reduce functions.
**/


// R.split pulls a string apart around a
// given value
console.log( R.split('i', 'mississippi') );

// Make a function called "words" which
// returns a list of words in a string.
// Use only the split function and
// currying.


var words = R.split(' '); // change this

console.log(words('one two three'));// => ['one', 'two', 'three']

// Create a function to triple every
// number in a list using only
// R.multiply and R.map.

var tripleList = R.map(R.multiply(3));
//console.log(tripleList([1,2,3]); // => [3,6,9]
console.log(tripleList([1,2,3]));
// Create a function to find the largest
// number in a list. You can use the
// greater(a,b) function which returns the
// greater of its two inputs. You can do
// this with currying and one of the list
// functions R.map, R.filter, or R.reduce.

var greater = function(a,b) {
  return a > b ? a : b;
};

var max = R.reduce(greater,-Infinity);
console.log(max([1,-3483,9,7,2])); // => 9
console.log(max([-21,-3483,-2,-1]));// => -1
```



## Composing
The composition of two functions returns a new function. This makes perfect sense: composing two units of some type (in this case function) should yield a new unit of that very type.
```
var compose = function(f,g) {
  return function(x) {
    return f(g(x));
  };
};
```
f and g are functions and x is the value being "piped" through them.

### Associativity
Composition is associative, meaning it doesn't matter how you group two of them. So, should we choose to uppercase the string, we can write:
```
compose(toUpperCase, compose(head, reverse));

// or
compose(compose(toUpperCase, head), reverse);
```
### Pointfree
 It means functions that never mention the data upon which they operate. First class functions, currying, and composition all play well together to create this style.
 ```
 //pointfree
 var snakeCase = compose(replace(/\s+/ig, '_'), toLowerCase);

 ```
 Currying allows us to prepare each function to just take its data, operate on it, and pass it along. Something else to notice is how we don't need the data to construct our function in the pointfree version, whereas in the pointful one, we must have our word available before anything else.
 ```
 //not pointfree because we mention the data: name
 var initials = function (name) {
   return name.split(' ').map(compose(toUpperCase, head)).join('. ');
 };

 //pointfree
 var initials = compose(join('. '), map(compose(toUpperCase, head)), split(' '));

 initials("hunter stockton thompson");
 // 'H. S. T'
 
 ```
 Pointfree code can again, help us remove needless names and keep us concise and generic. Pointfree is a good litmus test for functional code as it lets us know we've got small functions that take input to output.
### Ramda Examples :: [source](http://jsbin.com/yojoru)
 ```
 /*****************************************
      C O M P O S E  E X A M P L E
******************************************/
var _ = ramda;
var P = PointFree;
var map = P.fmap;
var compose = P.compose;
var Maybe = P.Maybe;
var Identity = P.Id;

var testFn = map(function(x){
	return x+2;
}, [2])
// testFn.toString() => 4
var result = Identity(2).map(R.add(1));
console.log(testFn.toString() )

// Use R.add(x,y) and map(f,x) to make a function that increments a value inside a functor
var ex1 = map(_.add(1)); 
assertDeepEqual(Identity(3), ex1(Identity(2)))

// Use _.head to get the first element of the list
var xs = Identity(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do'])
var ex2 = map(_.head)
assertDeepEqual(Identity('do'), ex2(xs))

// Use safeGet and _.head to find the first initial of the user
var safeGet = _.curry(function(x,o){ return Maybe(o[x]) })
var user = {id: 2, name: "Albert"}
var ex3 = compose(map(_.head),safeGet('name'));
assertDeepEqual(Maybe('A'), ex3(user))

var ex4 = function(n) {
	return Maybe( parseInt(n))
}
assertDeepEqual(Maybe(4), ex4("4"))

// TEST HELPERS
// =====================
function inspectIt(x){
  return (x.inspect && x.inspect()) || (x.toString && x.toString()) || x.valueOf(); //hacky for teachy.
}

function assertEqual(x,y){
  if(x !== y){ throw("expected "+x+" to equal "+y); }
}
function assertDeepEqual(x,y){
  if(x.val !== y.val) throw("expected "+inspectIt(x)+" to equal "+inspectIt(y));
}
 ```



## Further Reading / Useful Links
References [pdf](http://sencjw.com/talks/js_is_for_functions.pdf)  ,[video](https://www.youtube.com/watch?v=m3svKOdZijA)

Reference Guide for [Functional Javascript with Ramda](https://github.com/MostlyAdequate/mostly-adequate-guide/tree/69ebed50eded952a86082fb7ac745db7323d3e91)
