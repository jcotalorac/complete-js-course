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

const years = [1990, 1965, 1982, 1937];

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

/*var box5 = {
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

box5.clickMe();*/

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

/*var box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
};
box66.clickMe();*/


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