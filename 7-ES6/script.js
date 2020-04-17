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

function driverLicence(passedTest){
    
    if(passedTest) {
        var firstName = 'John';
        var yearOfBirth = 1990;
        
        console.log(firstName + ', born in ' + yearOfBirth + ' is now officially allowed to drive a car.');
    }
}

driverLicence(true);