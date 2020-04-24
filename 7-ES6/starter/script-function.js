//Lecture: Arrow for functions


//ES5

var box5 = {
    color: 'green',
    postion: 1,
    clickMe: function(){
        var self = this;
        document.querySelector('.green').addEventListener('click', function(){
            var str = 'This is box number ' + self.postion + ' and it is ' + self.color;
            alert(str);
        });

    }

}
box5.clickMe();


//ES6

const box6 = {
    color: 'blue',
    postion: 2,
    clickMe: function(){
 
        document.querySelector('.blue').addEventListener('click', 
        () => {
            var str = 'This is box number ' + this.postion + ' and it is ' + this.color;
            alert(str);
        });

    }

}
box6.clickMe();


function Person(name) {
    this.name = name;
}

// ES5
Person.prototype.myFriends5 =
function(friends) {
    
    var arr = friends.map(function(el){
        return this.name + ' is friends with ' + el;
    }.bind(this));
    console.log(arr);
}

var friends = ['Bob5', 'Jane5', 'Mark5'];
new Person('John').myFriends5(friends);


// ES6
Person.prototype.myFriends6 =
function(friends){
    
    const arr = friends.map(el =>
        `${this.name} is friends with ${el}`);
    
    console.log(arr);
}

new Person('Mike').myFriends6(friends);