var timeRemaining = 30;
var correctAnswers = 0;
var wrongAnswers = 0;
var questionArray = [{
	question: "What is the best show?",
	choices: ["show 1", "show 2", "show 3", "show 4"],
	answer: "show 1",
}, {
	question: "What is the worst show?",
	choices: ["show 11", "show 52", "show 83", "show 24"],
	answer: "show 1",
}, {
	question: "What is the funniest show?",
	choices: ["show 1", "show 2", "show 3", "show 444"],
	answer: "show 1",
}];

var questionCount = 0;
//create an array with answer objects inside of it
$(".startButton").on("click", function() {
	$(".startButton").remove();
  	timer = setInterval(timeRemaining, 1000);
  	timeRemaining--;
  	$(".timeRemaining").html(timer);
  	if(questionCount < questionArray.length) {
  		$(".question").html(questionArray[questionCount].question);
  		console.log(questionArray[questionCount].question);
  		$(".0").html(questionArray[questionCount].choices[0]);
  		$(".1").html(questionArray[questionCount].choices[1]);
  		$(".2").html(questionArray[questionCount].choices[2]);
  		$(".3").html(questionArray[questionCount].choices[3]);
  		$("p").click(function() {
  			var selectedAnswer = $(this).html();
  			if(selectedAnswer === questionArray[questionCount].answer) {
  				alert("yay");
  			}
  			else {
  				alert("boo");
  			}
  		})
  	} else {
  		gameOver ()
  	}




	// for(var i = 0; i < questionArray.length; i++) {
 //  		$(".question").html(questionArray[i].question);
 //  		console.log([i])
 //  		console.log(questionArray[i].choices[0])
 //  		}


  	// for (var i = 0; i < questions.length; i++) {
   //    panel.append('<h2>' + questions[i].question + '</h2>');
   //    for (var j = 0; j < questions[i].choices.length; j++){
   //      panel.append('<input type="radio" name ="question' + '-' + i + '"value="' + questions[i].choices[j] + '">' + questions[i].choices[j]);
   //      }
  	// 	}
  	// 	panel.append("<button id='done'>DONE</button>");
      


})
//have an on click even for a start button to start the game

//have a for loop that grabs the questions and answer key from the array

//have button clicks for the four answer choices

//if answer correct, show correct function, then move on to next question or end of game screen

//if answer incorrect, show incorrect function, then move on to next question or end of game screen

//if they run out of time to answer, show timeout function and then move on to next question or end of game screen

//create end of game screen.  need empty arrays for corrects and incorrects to fall into

