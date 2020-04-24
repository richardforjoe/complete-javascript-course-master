//varible declaration - let & const

//ES5
var name5 = 'Jane Smith';
var age5 = 23;

name5 = 'Jane Hiller 5';
console.log(name5);


//ES6 - const: dont change let: can change - block scoped

let firstName6 = 'Jane';
let lastName6 = 'Smith'
const yearOfBirth = 1990;
let age6 = calcAge(yearOfBirth);
function calcAge(year) {
    return 2020 - year;
}

console.log('ES5 ' + firstName6 + ',' + lastName6 + ', ' + age6);
console.log(`ES6 ${firstName6} ${lastName6} ${age6}`);

console.log(lastName6.startsWith('S'))




// ES5
function driversLicense5(passedTest) {
    if (passedTest){
        var firstName = 'John';
        var yearOfBirth = 1990;
        console.log(firstName + ', born in ' + yearOfBirth)
    }
}

driversLicense5(true);

// ES6
function driversLicense6(passedTest) {
    if (passedTest){
        let firstName = 'John';
        const yearOfBirth = 1990;
        console.log(firstName + ', born in ' + yearOfBirth)
    }
}

driversLicense6(true);

//Blocks and IIFS

{
    const a = 1;
    let b = 2;
    var c = 3; // global
}



//ES5
(function(){
    var c = 3; // not accessible
}());

//ES5
const years = [1998, 1965, 1982, 1937];


var ages5 = years.map(function(el){
    return 2016 - el;

});
console.log(ages5);

//ES6
const ages6 = years.map(el => 2016 - el);
console.log(ages6);

let ages6l = years.map(el => 2016 - el);
ages6l = years.map((el, index) => `Age element ${index + 1}: ${2016 -el}.`);
console.log(ages6l);

ages6l = years.map((el, index) => {
    const now = new
    Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`
});
console.log(ages6l);


//////Arrays

const boxes = document.querySelectorAll('.box');

//ES5

var boxesArrs = Array.prototype.slice.call(boxes);
boxesArrs.array.forEach(function(cur) {
    cur.style.backgroundColor = 'dogerblue';
    
});
