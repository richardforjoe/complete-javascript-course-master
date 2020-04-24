//Function constructor - use capital for function constructor names

var john = {
    firstName: 'John',
    lastName: 'Baltimore',
    birthYear: "1990",
    family: ['jane','mark','Bob'],
    job: 'teacher',
    isMarried: 'false'
};

var Person = function(firstName, lastName, birthYear, job, isMarried) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.job = job;
    this.isMarried = isMarried;
    //this.calculateAge = function(){console.log(2019 - this.birthYear)}
}
//Inhertance - constructors prototype property
Person.prototype.calculateAge = function(){
    console.log(2019 - this.birthYear);
};
Person.prototype.sayMyJob = function(){
    console.log(this.firstName+' works as a '+this.job);
};

Person.prototype.isMarried = false;

var John2 = new Person('John','Smith',1980,'Teacher',true);
var Richard = new Person('Richard','Forjoe',1982,'Pilot',true);

Richard.calculateAge();
John2.calculateAge();
Richard.sayMyJob();

// use to find out if object has a property
Richard.hasOwnProperty('job');
Richard instanceof Person;


//Object.create method
//Define/Create object to act as prototype - then create object based on the prototype
//Write prototype as a simple object - NB: Caps P since its not a function constructor
var personProto = {
    calculateAge: function(){
        console.log(2019 - this.birthYear);
    }
};

//first parameter
var john = Object.create(personProto);
john.name = 'John';
john.birthYear = '1990';
john.job = 'teacher';

//second paramter
var jane = Object.create(personProto,
    {
        name: {value: 'Jane'},
        birthYear: {value: 1969},
        job: {value: 'designer'}
    });
