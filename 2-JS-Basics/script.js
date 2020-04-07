/*
* Variables and data types
*/

/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

//Variable naming rules
var _years = 3;
*/

/*
* Variable mutation and type coercion
*/

/*var firstName = 'Jhon';
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried;

job = 'teacher';
isMarried = true;

console.log(firstName + ' is a ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(lastName);*/

/**********************
* Basic operators
*/

/*var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);*/

/**************************************
* Operator precedence
*/

/*var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 26
console.log(x, y);*/

/*******************************
* CODING CHALLENGE
*/

/*var bmiMark, bmiJohn, massMark, massJohn, heightMark, heightJohn;
massMark = 10;
heightMark = 20;
massJohn = 30;
heightJohn = 40;
bmiMark = massMark / (heightMark *= heightMark);
bmiJohn = massJohn / (heightJohn *= heightJohn);
console.log(bmiMark, bmiJohn);
console.log('Is Mark\'s BMI higher than John\'s? ' + (bmiMark > bmiJohn));*/

/*******************************
* If / else statements
*/

var firstName = 'John';
var civilStatus = 'married';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
}