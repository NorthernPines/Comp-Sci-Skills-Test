// click start begins quiz and timer
// remove h1 and add h2 "question"
// add list item buttons for answers
// when answer is chosen, load next question
// 
// list with 4 buttons/answers for each question
// 
// wrong answer subtracts time
//       if user choice === correct answer
//       then load next questions
//       else if question is === to other answer
//       then timer is decremented
//
// either all questions answered or timer = 0 ends quiz
//      timer ends, display message and go back to homepage
// 
// at game ends with time, high score and initials can be entered
//      store remaining time in score variable
//      place to enter initials
//      submit button
//          checks for valid text extry
// 
// upon submission, goto highschores page
//      display top high score(s)     
// 
// button to go back to quiz
//      link to opening page
// button to clear highscores

var questions = ["What is the git command to create a new file in terminal?", "What is the keyboard shortcut to paste?", "What is the '|' character not called"];
var ans1 = ["git push", "alt p", "divider"];
var ans2 = ["git touch", "shift a", "pipe"];
var ans3 = ["git new file", "right-click, paste", "vertical slash"];
var ans4 = ["git mkdr", "ctrl v", "pike"];
var ansC = ["a2", "a4", "a1"];

var displayQ = document.querySelector('#title');
var displayA1 = document.querySelector('#a1');
var displayA2 = document.querySelector('#a2');
var displayA3 = document.querySelector('#a3');
var displayA4 = document.querySelector('#a4');
var startButton = document.querySelector('#start-button');
var choices = document.querySelector('#answers');
var subtitle = document.querySelector('#subtitle');
var scoreEl = document.querySelector('#seconds-left');
var score = 100;

var currentQ = 0;

startButton.addEventListener("click", function(){
    quiz();
})

function quiz() {

    scoreTimer = setInterval(function () {
        score = score - 1;
        scoreEl.textContent = score + "seconds left";
        
        displayQuestion();

        choices.addEventListener('click', function(event){
            var target = event.target.id;
            console.log(target);
        
            if (target == ansC[currentQ]){
                if (currentQ < (questions.length - 1)){
                    currentQ++;
                    displayQuestion();
                } else {
                    displayFinalScore();
                }
            } else {
                score -= 10;
                if (currentQ < (questions.length - 1)){
                    currentQ++;
                    displayQuestion();
                } else {
                    displayFinalScore();
                }
                
            }

           
        })

    }, 1000);

}


  function displayFinalScore() {
    displayQ.textContent = "Test over";

    subtitle.textContent = "Your final score is " ;
    document.querySelector("#enter-name").hidden = false;
    choices.hidden = true;
}

function displayQuestion() {
    displayQ.textContent = questions[currentQ];

    choices.hidden = false;

    displayA1.textContent = ans1[currentQ];
    displayA2.textContent = ans2[currentQ];
    displayA3.textContent = ans3[currentQ];
    displayA4.textContent = ans4[currentQ];

    startButton.style.visibility = "hidden";
    subtitle.textContent = " ";
}