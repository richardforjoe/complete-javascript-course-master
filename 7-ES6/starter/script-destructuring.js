//Destructing - convenient way to extract data from an array
//Array of data , and want to store values in a variable

//ES5

var john = ['David', 36];
var name = john[0];
var age = john[1];

//both elements in seperate variables - 

console.log(name);

//ES6 Destructing

const [name6, ,year6] = ['John6', 26, "Peter"]

console.log(year6);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

const{firstName: a, lastName: b} = obj
console.log(a);

//ES5 - retrun multiple values of a object
const retirementAge = 65;

function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, retirementAge - age]
}

const [age2, retirement] = calcAgeRetirement(1982);
console.log(age2);
console.log(retirement);