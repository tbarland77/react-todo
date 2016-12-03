// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['Jen', 'Micro'];
// var groupB = ['Vikram'];
// var final = [3, ...group];
//
// console.log(final);

var person = ['Timothy', 21];
var person2 = ['Micro', 25];

function greet (name, age) {
  console.log('Hello! ' + name + ' You are ' + age + ' huh?');
}

greet(...person);
greet(...person2);

var names = ['Mike', 'Ben'];
var final = ['Timothy', ...names];

final.forEach (function(name){
  console.log('Hello ' + name);
});
