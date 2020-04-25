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
boxesArrs.forEach(function(currentElement) {
    currentElement.style.backgroundColor = 'dodgerblue';
    console.log(boxesArrs);    
});

//ES6
const boxesArrs6 = Array.from(boxes); // transforms to array
boxesArrs6.forEach(currentElement => currentElement.style.backgroundColor = 'dodgerblue');
console.log(boxesArrs6);


//loops for an array - usualy forEach or map methods used - issue, unable to break.
//

//ES5 - 
for(var i = 0; i < boxesArrs.length;i++) {

    if(boxesArrs[i].className === 'box blue'){ // if condition is met do -- then continue
        continue; // continue - skip iteration of loop and go to next | break stop
    }

    boxesArrs[i].textContent = 'I changed to blue 5';
}

//ES6 - forOff - Combines forEach with for loop

for (const currentElment of boxesArrs6) {
 if (currentElment.className.includes('blue')){
     break;
 }

    currentElment.textContent = 'I changed to blue 6!';
}

//Other array methods - indexOf - 

//ES5 
var ages = [12,17,8,21,14,11]

var fullAge = ages.map(function(currentAge) {
    return currentAge >= 18;
});
console.log("FullAge:"+fullAge);

console.log(fullAge.indexOf(true));
console.log(ages[fullAge.indexOf(true)]);

//ES6 - new methods findIndex 

ages.findIndex(currentElement => currentElement >= 18);
console.log("findIndex method "+ages.findIndex(currentElement => currentElement >= 18))
console.log("find value method "+ages.find(currentElement => currentElement >= 18))

//Spread operatior  - Expands elements of an array 

//function to add 4 ages

function addAges (a, b, c) {
    return a + b + c;
}

var sum1 = addAges(1,2,3);
console.log("addAges(1,2,3,4) "+sum1);

//ES5 - pass array of values | bind or call methods | apply method receives an array
var agesArray = [1,2,3]

var sum2 = addAges.apply(null,agesArray);
console.log("addAges(agesArray) "+sum2);

//ES6 
const sum3 = addAges(...agesArray);
console.log("addAges(...agesArray) "+sum3);

// Join 2 arrays
const familySmith = ['John', 'Jane','Mark'];
const familyJones = ['Mary', 'Bob','Anne'];

const bigFamily = [...familySmith, ...familyJones];
console.log("Big family "+bigFamily);
const bigFamily2 = [...familySmith, 'Andrew', ...familyJones];
console.log("Big family "+bigFamily2);

//can be used on a nodeList

//Rest Parameters - function parameters - use ... but opposite, single values in array - 
//Used in function declaration to accept arbituary number of parameters - Spreas vs Rest parameters

//ES5
function isFullAge5() {
    console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments); //transforms to an array

    argsArr.forEach(function(currentElement) {
        console.log((2016 - currentElement) >=18);
    })
}

isFullAge5(1990, 1999, 1956);
isFullAge5(1990, 1999, 1956, 1982, 2000);

//ES6

function isFullAge6(limit,...years) {
    console.log(years);

    years.forEach(currentYear => console.log((2016 - currentYear) >=limit));

}

isFullAge6(21, 1990, 1999, 1956);

//Default parameters - one or more paramters of a function to be pre-set | 

//ES5 - function constructors - Default parameters

function smithPerson(firstName, yearOfBirth, lastName, nationality){

    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? nationality = 'american' : nationality = nationality;

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new smithPerson('John', 1990);
console.log(john);
var emily = new smithPerson('Emily', 1983, 'Diaz', 'Spanish');
console.log(emily);


//ES6 - Default parameters specified when declaring the parameters
function smithPerson6(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American'){

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new smithPerson6('John', 1990);
console.log(john);
var emily = new smithPerson6('Emily', 1983, 'Diaz', 'Spanish');
console.log(emily);

//Maps - new data structures - key value data structures - Any primitive value as Keys

const question = new Map(); //New empty map

question.set('question', 'What is the official name of JavaScript version');
question.set(1, 'ES5')
question.set(2, 'ES6')
question.set(3, 'ES2015')
question.set(4, 'ES7')
question.set('answer', 3)
question.set(true, 'Correct Answer')
question.set(false, 'Please try again')

console.log(question);

question.get('question');
console.log(question.get('question'));
console.log(question.size);

if(question.has(4)) {
    question.delete(4);
    console.log(question);
}
//question.clear();
//loop through map - forEach

question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`))

for (let [key, value] of question.entries()){

    if(typeof(key) === 'number'){
        console.log(`Answer ${key}: ${value}`)
    }    
}
const ans = parseInt(prompt('Write the correct answer'));
console.log(question.get(ans === question.get('answer')));

//Classes - Prototype + Enheritance - objects based on blueprint

//ES5

var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age5 = new Date().getFullyear - this.yearOfBirth;
        console.log("Person5 age ----")
        console.log(age5);
    }

    var john5 = new Person5('John', 1990, 'Teacher');
    console.log("Johns age ---")
    console.log(john5.calculateAge);

    //ES6 - Every class request constructor
    class Person6 {
        constructor (name, yearOfBirth, job) {
            this.name = name;
            this.yearOfBirth = yearOfBirth;
            this.job = job;
        }

        calculateAge() { //Method for class
            var age6 = new Date().getFullyear() - this.yearOfBirth;
            console.log(age6) 
        }

        static greeting() {
            console.log('Hey there!');
        }
    }

    const John6 = new Person6('John', 1990, 'Teacher')
    console.log(John6.calculateAge);

    Person6.greeting();
    

// Sub classes - 

//ES5

var Person5s = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5s.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}



var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
    Person5s.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}

Athlete5.prototype = Object.create(Person5s.prototype);

Athlete5.prototype.wonMedal = function() {
    this.medals++
    console.log(this.medals);
}

var JohnAthelete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);
JohnAthelete5.calculateAge();
JohnAthelete5.wonMedal();

//ES6
class Person6s {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() { //Method for class
        var age6s = new Date().getFullyear() - this.yearOfBirth;
        console.log(age6s); 
    }


}

class Athlete6 extends Person6s {
    constructor(name, yearOfBirth, job, olympicGames, medals){
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++;
        console.log(this.medals)
    }
} 


const JohnAthelete6s = new Athlete5('John', 1990, 'swimmer', 3, 10);

JohnAthelete6s.wonMedal();
JohnAthelete6s.calculateAge();
