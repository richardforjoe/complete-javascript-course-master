//IIFE - Immediately invoked Function Expression

//Random score >= 5 loss < 5

function game(){
    var score = Math.random() * 10;
    console.log(score >= 5);

}

game();

//treated as an expression not declaration
(function(){
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

//can only be called once - new scope hidden from outside - data privacy - not for re-use code
(function(goodLuck){
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);

//Closures

function retirementAge(retireAge){
    var a = ' years left until retirement.';
    return function(yearOfBirth){
        var age = 2019 - yearOfBirth;
        console.log((retireAge - age) + a)
    }
}

var retirementUS = retirementAge(66);
var retirementGermany = retirementAge(65);
retirementUS(1990);
retirementAge(66)(1980);


//Closures - 
function interviewQuestion2(job){
    var desingerQuestionText = ', can you please explain what UX design is?'
    var teacherQuestionText = ' What subject do you teach, '
    return function(name){
//Switch 
switch(job) {
    case 'designer':
        return outPutText.textContent = name + desingerQuestionText;
    case 'teacher':
        return outPutText.textContent = teacherQuestionText + name + '?';  
        
    default:
        return outPutText.textContent = 'Hello ' + name + ', What do you do?';    
}
    }
    
}
var teacherQuestion = interviewQuestion2('teacher');
var designerQuestion = interviewQuestion2('designer');
teacherQuestion('Peter');
designerQuestion('Bob');
interviewQuestion2('designer')('James');

/////////////////////////////
// Lecture: Bind, call and apply

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' +  
            this.name + ', I\'m a ' + 
            this.job + ' and I\'m ' + 
            this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' +  
            this.name + ', I\'m a ' + 
            this.job + ' and I\'m ' + 
            this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};

john.presentation('formal','morning');

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

//using presenatation method from John for emily - use call
//Method borrowing using call method - allows to set this. variable
john.presentation.call(emily,'friendly','afternoon')

//apply accepts arrays, call doesnt
//john.presentation.apply(emily,['friendly','afternoon'])

//bind method, similar to call method - bind copies the function, function with pre-set
// pre-set - 
var johnFriendly = john.presentation.bind(john,'friend');
johnFriendly('morning');
johnFriendly('night');

// Example 2
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullAgeUSA = arrayCalc(ages, isFullAge.bind(this, 21));
console.log(ages);
console.log(fullAgeUSA);


