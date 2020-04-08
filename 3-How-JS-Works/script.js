//////////////////////////////
// Hoisting

calculateAge(1965);

function calculateAge(year) {
    console.log(2016 - year);
}

// retirement(1990);

var retirement = function(year) {
    console.log(65 - (2016 - year));
}

console.log(age);
var age = 23;