/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/


function Question (question, answers, correct){
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }
    
    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('--------------------------')

    
    }

    Question.prototype.checkAnswer = function(ans,callback) {
        if (ans === this.correct) {
            console.log('Correct answer!');
            sc = callback(true);

        } else {
            console.log('Wrong answer. Try again :)')
            sc = callback(false);
        }
        this.displayScore(sc);
    }

    var q1 = new Question('Trinculo admits I have been in such a pickle... in this comedy:',
                          ['The Tempest', 'Henry 4, Part 1', 'Henry 5', 'The Merry Wives of Windsor'],
                          0);

    var q2 = new Question('In Hamlet, which character remarks: Neither a borrower nor a lender be',
                          ['Fortinbras', 'Gertrude', 'Polonius', 'The Ghost of Hamlets Father'],
                          2);

    var q3 = new Question('Roger Daltrey, well into his career with The Who, played the roles for both Dromios, the twin servants, in a 1983 BBC production of:',
                          ['King John', 'King Lear', 'Coriolanus', 'The Comedy of Errors'],
                          3);

                          var questions = [q1, q2, q3];

                          function score(){
                              var sc = 0;
                              return function(correct){
                                  if (correct){
                                      sc++;
                                  } return sc;
                              }
                          }
                      
                          var keepScore = score();

                          function nextQuestion(){

                            

                            var n = Math.floor(Math.random() * questions.length);
                        
                            questions[n].displayQuestion();
                        
                            //parseInt converts string to Integer
                            var answer = prompt('Please select the correct answer.');
                        
                            
                            if (answer !== 'exit') {
                                questions[n].checkAnswer(parseInt(answer),keepScore);
                                nextQuestion();
                            }

    }

    nextQuestion();
