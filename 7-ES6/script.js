// Let and const
/*
var name5 = 'Jane Smith';
var age = 23;
name5 = 'Jane Miller';
console.log(name5);

const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);
*/

/*function driverLicence(passedTest){
    
    if(passedTest) {
        console.log(firstName);
        var firstName = 'John';
        var yearOfBirth = 1990;
    }
    console.log(firstName + ', born in ' + yearOfBirth + ' is now officially allowed to drive a car.');
}

driverLicence(true);

function driverLicence6(passedTest){
    //console.log(firstName);
    let firstName;
    const yearOfBirth = 1990;
    
    if(passedTest) {
        firstName = 'John';
    }
    console.log(firstName + ', born in ' + yearOfBirth + ' is now officially allowed to drive a car.');
}

driverLicence6(true);


var i = 23;

for(var i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);*/

//////////////////////////
// Blocks and IIFEs

/*{
    const a = 1;
    let b = 2;
}

//console.log(a + b);

(function(){
    var c = 3;
})();

console.log(c);*/

//////////////////////////
// Strings
/*
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
    return 2016 - year;
}

console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('J'));
console.log(n.includes('m'));
console.log(n.repeat(3));*/

///////////////////////////////
// Arrow functions

/*const years = [1990, 1965, 1982, 1937];

var ages5 = years.map(function(current){
    return 2016 - current;
});
console.log(ages5);

let ages6 = years.map(current => 2016 - current);
console.log(ages6);

ages6 = years.map((current, index) => `Age element ${index + 1}: ${2016 - current}`);
console.log(ages6);

ages6 = years.map((current, index) => {
    const now = new Date().getFullYear();
    const age = now - current;
    return `Age element ${index + 1}: ${age}`;
});
console.log(ages6);

var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        var self = this;
        document.querySelector('.green').addEventListener('click', function(){
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
};

box5.clickMe();

var box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
};
box6.clickMe();

var box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
};
box66.clickMe();


function Person(name) {
    this.name = name;
};

Person.prototype.myFriends5 = function(friends){
    var arr = friends.map(function(current){
        return this.name + ' is friends with ' + current;
    }.bind(this));
    
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);

Person.prototype.myFriends6 = function(friends){
    var arr = friends.map(current => `${this.name} is friends with ${current}`);
    
    console.log(arr);
}
new Person('Mike').myFriends6(friends);
*/

//////////////////////////////
// Destructuring

/*var john = ['John', 26];
//var name = john[0];
//var age = john[1];

const [name, age] = ['John', 26];
console.log(name, age);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

const {firstName, lastName} = obj;
console.log(firstName, lastName);

const {firstName: a, lastName: b} = obj;
console.log(a, b);


function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age6, retirement] = calcAgeRetirement(1990);
console.log(age6, retirement);*/

////////////////////////////////
// Arrays

/*const boxes = document.querySelectorAll('.box');

var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(current){
    current.style.backgroundColor = 'dodgerblue';
});

const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(current => current.style.backgroundColor = 'dodgerblue');

for(var i = 0; i < boxesArr5.length; i++) {
    
    if(boxesArr5[i].className === 'box blue') {
        //continue;
        break;
    }
    
    boxesArr5[i].textContent = 'I changed to blue!';
}

for(const current of boxesArr6) {
    if(current.className.includes('blue')) {
        continue;
    }
    current.textContent = 'I changed to blue';
}


var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(current){
    return current >= 18;
});
console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

console.log(ages.findIndex(current => current >= 18));
console.log(ages.find(current => current >= 18));
*/

////////////////////////////////////
// Spread operator

/*
function addFourAges(a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

const sum3 = addFourAges(...ages)
console.log(...ages);
console.log(sum3);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, ...familyMiller];
console.log(bigFamily);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(current => current.style.color = 'purple');
*/

////////////////////////////////////////
// Rest parameters

/*function isFullAge5() {
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);
    
    argsArr.forEach(function(current){
        console.log((2016 - current) >= 18);
    });
}
isFullAge5(1990, 1999, 1965);
isFullAge5(1990, 1999, 1965, 2016, 1987);

function isFullAge6(...years){
    years.forEach(current => console.log((2016 - current) >= 18));
}
isFullAge6(1990, 1999, 1965);*/

/*function isFullAge5(limit) {
    console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments, 1);
    console.log(argsArr);
    argsArr.forEach(function(current){
        console.log((2016 - current) >= limit);
    });
}
isFullAge5(18, 1990, 1999, 1965);

function isFullAge6(limit, ...years){
    years.forEach(current => console.log((2016 - current) >= limit));
}
isFullAge6(21, 1990, 1999, 1965);*/

//////////////////////////////////////77
// Default parameters

/*function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
    
    lastName === undefined ? lastName = 'Smith' : lastName;
    nationality === undefined ? nationality = 'american' : nationality;
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationatity = nationality;
}*/

/*function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationatity = nationality;
}

var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');
console.log(john, emily);*/

////////////////////////////////
// Maps

/*
const question = new Map();
question.set('question', 'What is the official name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer');
question.set(false, 'Wrong, please try again');

console.log(question.get('question'));
console.log(question.size);

console.log(question.has(4));
question.delete(4);
console.log(question.has(4));

//question.clear();

//question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));

for(let [key, value] of question.entries()) {
    console.log(`This is ${key}, and it's set to ${value}`);
}
*/

///////////////////////////////////
// Classes

/*var Person5 = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');
john5.calculateAge();

class Person6 {
    constructor(name, yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    
    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
    
    static greeting() {
        console.log('Hey there!');
    }
}

const john6 = new Person6('John', 1990, 'teacher');
john6.calculateAge();
Person6.greeting();*/

var Person5 = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');
john5.calculateAge();

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals){
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
};