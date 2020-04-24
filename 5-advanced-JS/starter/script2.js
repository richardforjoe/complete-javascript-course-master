// Primitives vs Objects - Not references

//Primitives - Not referenced
var a = 23
var b = a
a = 46;
console.log(a);
console.log(b);

var obj1 = {
    name: 'John',
    age: 26
};

//Objects - referenced
var obj2 = obj1;
obj1.age = 30;
console.log(obj1);
console.log(obj2);

//Functions
var age = 27;
var obj = {
    name: 'Richard',
    city: 'Manchester'
};

function change(a, b){
    a = 30;
    b.city = 'London';
}

change(age, obj);
console.log(age);
console.log(obj.city);

///Passing functions as arguments

var years = [1990, 1989, 1991, 1957, 2005];

//Generic function - loops through array - takes an array, applies a passed function which then returns an array of the results
function arrayCalc(arr, fn){
    var arrResult = [];
    for(var i = 0; i < arr.length; i++) {
        arrResult.push(fn(arr[i]));
    }
    return arrResult;
};

//Functions to calculate age on the array - takes an array and applys a function on the values
//Each with single tasks
function calculateAge(yearOfBirth){
    return 2016 - yearOfBirth;
}

//Function to check if over 18
function isFullAge(yearOfBirth){
    return yearOfBirth >=18;
}

function maxHeartRate(age){
    if (age >= 18 && age <= 81){
        return Math.round(206.9 - (0.67 * age));
    } else {
        return -1;
    }
    
}

var outPutText = document.getElementById('output');

var ages = arrayCalc(years,calculateAge);
console.log(ages)

var fullAges = arrayCalc(ages,isFullAge);
console.log(fullAges);

var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);

//First class functions retrun functions
function interviewQuestion(job){
    var desingerQuestionText = ', can you please explain what UX design is?'
    var teacherQuestionText = ' What subject do you teach, '
    //Switch 
switch(job) {
    case 'designer':
        return function(name){
            //annonymous function
            outPutText.textContent = name + desingerQuestionText;
        };
    case 'teacher':
        return function(name) {
            outPutText.textContent = teacherQuestionText + name + '?';  
        }
    default:
        return function(name){
            outPutText.textContent = 'Hello ' + name + ', What do you do?';
        };      
}
}
var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
teacherQuestion('Peter');
designerQuestion('Bob');
interviewQuestion('designer')('James');
//outPutText.textContent = 'ages: '+ages+' full ages: '+fullAges+' rates: '+rates;

