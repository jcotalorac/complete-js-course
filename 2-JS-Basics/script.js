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

/*var firstName = 'John';
var civilStatus = 'married';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}*/

/***********************************
* Boolean logic
*/

/*var firstName = 'John';
var age = 16;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
   console.log(firstName + ' is a man.');
}*/

/*****************************************
* Ternary operator and switch statements
*/

/*var firstName = 'John';
var age = 22;

age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// Switch statement
var job = 'teacher';
switch (job) {
    case 'teacher':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisboa.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}*/

/**************************************
* Truthy and falsy values
*/

// Falsy values: undefined, null, 0, '', NaN

/*var height;

height = 23;
if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

// Equality operators
if (height == '23') {
    console.log('The == operator does type coercion');
}*/

/**********************************
* Coding challenge 2
*/

/*var johnScore1, johnScore2, johnScore3, mikeScore1, mikeScore2, mikeScore3, johnAverage, mikeAverage;

johnScore1 = 89;
johnScore2 = 120;
johnScore3 = 103;

mikeScore1 = 116;
mikeScore2 = 94;
mikeScore3 = 123;

johnAverage = (johnScore1 + johnScore2 + johnScore3) / 3;
mikeAverage = (mikeScore1 + mikeScore2 + mikeScore3) / 3;

switch (true) {
    case johnAverage > mikeAverage:
        console.log('Winner is John');
        break;
    case mikeAverage >  johnAverage:
        console.log('Winner is Mike');
        break;
    default:
        console.log('It\'s a draw');
}*/

/************************************************
* Functions
*/

/*function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.');
    }
    
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');*/

/*********************************
* Function statements and expressions
*/

// Function declaration
/*function whatDoYouDo(job, firstName) {
    
}*/

// Function expression
/*var whatDoYouDo = function(job, firstName) {
   switch(job) {
       case 'teacher':
           return firstName + ' teaches kids how to code';
       case 'driver':
           return firstName + ' drives a cab in Lisbon';
       case 'designer':
           return firstName + ' designs beautiful websites';
       default: return firstName + ' does something else';
   } 
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));*/

/********************************
* Arrays
*/

/*var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
console.log(names);
console.log(names.length);

names[1] = 'Ben';
names[5] = 'Mary';
console.log(names);

var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);*/

/************************************
* Coding challenge 3
*/
/*var bills = [124, 48, 268];

function calculateTip(billAmount) {
    if(billAmount < 50) {
        return 20/100;
    } else if (billAmount >= 50 && billAmount < 200) {
        return 15/100;
    } else {
        return 10/100;
    }
}

var tips = [calculateTip(bills[0]), calculateTip(bills[1]), calculateTip(bills[2])];
var totals = [bills[0] * (1 + tips[0]), bills[1] * (1 + tips[1]), bills[2] * (1 + tips[2])];
console.log(tips, totals);*/

/********************************
* Objects
*/

// Object literal
/*var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// new Object syntax
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);*/

/************************************
* Methods for objects
*/

/*var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge();
console.log(john);*/

/**********************************
* Coding challenge 4
*/

/*var john = {
    name: 'John',
    mass: 10,
    height: 20,
    calcBMI: function(){
        this.bmi = this.mass / (this.height *= this.height);
    }
};

var mark = {
    name: 'Mark',
    mass: 30,
    height: 40,
    calcBMI: function(){
        this.bmi = this.mass / (this.height *= this.height);
    }
};

john.calcBMI();
mark.calcBMI();
console.log(john.bmi > mark.bmi ? 'John has greater bmi': mark.bmi > john.bmi ? 'Mark has greater bmi' : 'Same bmi');*/

/****************************************
* Loops and iteration
*/

/*for (var i = 0; i < 10; i++) {
    console.log(i);
}*/

/*var john = ['John', 'Smith', 1990, 'designer', false];

for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

var i = 0;
while(i < john.length) {
    console.log(john[i]);
    i++;
}*/

/*var john = ['John', 'Smith', 1990, 'designer', false];

for (var i = 0; i < john.length; i++) {
    if(typeof john[i] !== 'string') {
        continue;
    }
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
    if(typeof john[i] !== 'string') {
        break;
    }
    console.log(john[i]);
}*/

/************************************
* Coding challenge 5
*/

var john = {
    bills: [124, 48, 268, 180, 42],
    calcTip: function() {
        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            if(this.bills[i] < 50) {
                percentage = 20/100;
            } else if (this.bills[i] >= 50 && this.bills[i] < 200) {
                percentage = 15/100;
            } else {
                percentage = 10/100;
            }
            this.tips[i] = this.bills[i] * percentage;
            this.totals[i] = this.bills[i] + this.tips[i];
        }
    }
};

john.calcTip();
console.log(john);