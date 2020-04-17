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
console.log(n.repeat(3));