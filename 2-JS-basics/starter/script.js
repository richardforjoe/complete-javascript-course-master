console.log('Hello World');


/**************** 
 * loop - for ,
*/
var test = [];
for (a = 0;a < 10; a+=2){
    console.log(a);
    test.push(a);

}
console.log(test);
console.log(test.length);

while(0 < test.length){
    console.log(test);
    test.pop(a);
    a--;

}
console.log(test);


/**************** 
 * Objects and properties - group variables
*/
var john = {
    firstName: 'John',
    lastName: 'Baltimore',
    birthYear: "1990",
    family: ['jane','mark','Bob'],
    job: 'teacher',
    isMarried: 'false'
};

console.log(john.firstName);
console.log(john['firstName']);

john.job = 'driver';

var jane = new Object();
jane.name = 'Jane';
johnAge.birthYear = 1989;

/**************** 
 * Object methods
*/

var peter = {
    firstName: 'John',
    lastName: 'Baltimore',
    birthYear: "1990",
    family: ['jane','mark','Bob'],
    job: 'teacher',
    isMarried: 'false',
    calcAge: function(){
        this.age = 2019 - this.birthYear;
    }
};

peter.calcAge();
console.log(peter);


/**************** 
 * Function expressions
*/

var whatDoYouDo = function(job, firstName) {
   return job;
}

/**************** 
 * Arrays
*/

var names = ['John', 'Peter', 'James']
var years = new Array(1980, 1990, 2000);

console.log(years[0])
console.log(years.length)

years[1] = '1982';
years[5] = '1983';
years[years.length] = '1979';

years.push('2019');
years.unshift('200'); //adds to first
years.pop; //removes from the end
years.shift(); // removes first item
years.indexOf('1982');



/**************** 
 * Functions
*/

function callculateAge(birthYear) {
    return 2019 - birthYear;
}

var johnAge = prompt('What is your birth year?');

console.log(callculateAge(johnAge));

function yearsToRetirement(birthYear, firstName){
    var age = callculateAge(birthYear);
    var retirement = 65 - age;
    console.log(firstName + ' retires in ' + retirement + ' years.');
}

yearsToRetirement(1990, 'Bob')

/*****
 * Data Types + Loops
 */
var firstName = 'John';

if(lastName === "Forjoe"){
    console.log(firstName, lastName);
} else {
    console.log('failed');
}

var age = 16;

age >= 18 ? console.log(firstName + 'drinks beer.')
: console.log(firstName + 'drinks juice.');

//Ternary Operator
var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

//Switch 
var job = 'teacher';
switch(job) {
    case 'teacher':
        console.log(firstName + ' teaches kids how to code');
        break;
    case 'driver':
        console.log(firstName + ' drives kids to school');  
        break;
    default:
        console.log(firstName + ' does something else');      
}

//falsy vs truthy - || OR && AND, === strict equality, == - datatype don't have to match
var height = 0;
if (height || height === 0) {
    console.log('variable is defined');

} else {
    console.log('variable has NOT been defined');
}

