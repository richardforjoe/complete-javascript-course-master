var data = [1,2,3,4,5,6,7,8,9,10, 11, 12,13,14,15];

var fizzbuzz = function(data){
console.log(data);
var new_data = [];
                
                data.forEach(function(current) {
                    if (current % 3 == 0 && current % 5 == 0){
                        new_data.push('Fizz buzz');

                } else if (current % 3 == 0) {
                        new_data.push('Fizz');
                        console.log(current);
                

                    } else if (current % 5 == 0){
                        new_data.push('Buzz');
                        console.log(current);
                    
                    } else {
                        new_data.push(current)
                    };
                    
                });
                return new_data;
            }