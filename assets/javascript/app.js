var timeRemaining = 21;
var correctAnswers = 0;
var wrongAnswers = 0;
var questionArray = [{
	question: "What year did Seinfeld Debut?",
	choices: ["1988", "1989", "1990", "1991"],
	answer: "1989",
	picture: "<img src='assets/images/episode1.jpg'/>",
	sound: "assets/sounds/theme.mp3",
}, {
	question: "When Kramer received the personalized license plates of a proctologist by mistake, what did they read?",
	choices: ["Assman", "ButtDoc", "AssMD", "Rearend"],
	answer: "Assman",
	picture: "<img src='assets/images/assman.jpg'/>",
	sound: "assets/sounds/assman.wav",
}, {
	question: "What was the name of the group's regular lawyer?",
	choices: ["Jackie Chiles", "Russell Dalrymple", "J Peterman", "Joe Davola"],
	answer: "Jackie Chiles",
	picture: "<img src='assets/images/jackie.jpg'/>",
	sound: "assets/sounds/chiles_real.wav"
}, {
	question: "What did Jerry and George keep pretending to say as Jerry's girlfriend Claire's stomach, leading Jerry to choose 'the voice,' over her?",
	choices: ["I'm hungry", "Hello", "Goodbye", "You're Welcome"],
	answer: "Hello",
	picture: "<img src='assets/images/Z0kG7_f-thumbnail-100-0_s-600x0.jpg'/>",
	sound: "assets/sounds/hello3.wav",
}, {
	question: "What was the job of Jerry's nemisis neighbor Newman?",
	choices: ["Meter Maid", "Airline Desk Clerk", "Police Officer", "Postal Worker"],
	answer: "Postal Worker",
	picture: "<img src='assets/images/newman.jpg'/>",
	sound: "assets/sounds/newman2.wav",
}, {
	question: "Who won 'The Contest'? (Even if they revealed later that they cheated.)",
	choices: ["Jerry", "George", "Elaine", "Kramer"],
	answer: "George",
	picture: "<img src='assets/images/thecontest.png'/>",
	sound: "assets/sounds/master_of_domain.wav",
}, {
	question: "How much did 'The Kramer' painting sell for to the elderly couple?",
	choices: ["$500", "$1,000", "$10,000", "$5,000"],
	answer: "$5,000",
	picture: "<img src='assets/images/hqdefault.jpg'/>",
	sound: "assets/sounds/brute.wav",
}, {
	question: "What kind of 'talker' did the group never describe someone as?",
	choices: ["A Low Talker", "A High Talker", "A Far Talker", "A Close Talker"],
	answer: "A Far Talker",
	picture: "<img src='assets/images/elaine.jpg'/>",
	sound: "assets/sounds/talkers.wav",
}];

var questionCount = 0;
//create an array with answer objects inside of it
$(".startButton").on("click", function() {
	$(".startButton").remove();
  	timer = setInterval(countdown, 1000);
  	// timeRemaining--;
  	// $(".timeRemaining").html(timer);
  	if(questionCount < questionArray.length) {
  		askQuestion();

  		function createHTML() {
  			$(".mainSection").html("<div class='timeRemaining'></div>" + "<div class='question'></div>" + "<div class='answers'>" + '<p id="answerClick" class="0"></p>' + '<p id="answerClick" class="1"></p>' + '<p id="answerClick" class="2"></p>' + '<p id="answerClick" class="3"></p>' + "</div>")
  		}

  		function askQuestion() {
  			timeRemaining = 21;
  			createHTML();
  			countdown();
	  		$(".question").html(questionArray[questionCount].question);
	  		$(".0").html(questionArray[questionCount].choices[0]);
	  		$(".1").html(questionArray[questionCount].choices[1]);
	  		$(".2").html(questionArray[questionCount].choices[2]);
	  		$(".3").html(questionArray[questionCount].choices[3]);
	  		$("p").click(function() {
	  			var selectedAnswer = $(this).html();
	  			if(selectedAnswer === questionArray[questionCount].answer) {
	  				correctNextQuestion();
	  			}
	  			else {
	  				wrongNextQuestion();
	  			}
	  		})
  		}

  		function correctNextQuestion() {
	  		correctAnswers++;
  			$(".mainSection").html("<h2>'You Were Right!!'</h2>" + "<div class='answerPicture'>" + questionArray[questionCount].picture + "</div>")
  			document.getElementById("sound").src = questionArray[questionCount].sound;
  			$("#sound").trigger("play");
  			questionCount++;
  			if(questionCount === questionArray.length) {
  				setTimeout(gameOver, 5000)
  			}
  			else {
  				setTimeout(askQuestion, 5000);
  			}
  		}

  		function wrongNextQuestion() {
  			wrongAnswers++;
  			$(".mainSection").html("<h2>You Were Wrong!! The correct answer was " + questionArray[questionCount].answer + ".</h2>" + "<div class='answerPicture'>" + questionArray[questionCount].picture + "</div>")
  			document.getElementById("sound").src='assets/sounds/no_soup.wav';
  			$("#sound").trigger("play");
  			questionCount++;
  			if(questionCount === questionArray.length) {
  				setTimeout(gameOver, 4000)
  			}
  			else {
  				setTimeout(askQuestion, 4000);  				
  			}
  		}  		

	  	function gameOver() {
	  		$(".mainSection").html("<div class='gameOver'>GAME OVER!!</div><br>" + "<div class='correctAnswers'>Correct Answers: " + correctAnswers + "</div><br>" + "<div class='wrongAnswers'>Incorrect Answers: " + wrongAnswers + "</div><br><br>" + "<div><button class='reset'>Reset Game!</button></div>");
	  	}

	  	$(".reset").on("click", function() {
	  		resetGame();
	  	})

	  	function resetGame() {
	  		timeRemaining = 21;
			correctAnswers = 0;
			wrongAnswers = 0;
			questionCount = 0;
			askQuestion();
	  	}

  	}

	function countdown() {
		  		timeRemaining--;
		  		$(".timeRemaining").html("Time Remaining: " + timeRemaining + "<br></br>");

			  	if(timeRemaining === 0) {
			  		wrongAnswers++;
		  			$(".mainSection").html("<h2>Time's Up!! The correct answer was " + questionArray[questionCount].answer + ".</h2>" + "<div class='answerPicture'>" + questionArray[questionCount].picture + "</div>")
		  			document.getElementById("sound").src='assets/sounds/how_hard.wav';
  					$("#sound").trigger("play");
		  			questionCount++;
		  			timeRemaining = 21;
		  			if(questionCount === questionArray.length) {
		  				setTimeout(gameOver, 4000)
		  			}
		  			else {
		  				setTimeout(askQuestion, 4000);
		  			}
		  		}
	}

})
//have an on click even for a start button to start the game

//have a for loop that grabs the questions and answer key from the array

//have button clicks for the four answer choices

//if answer correct, show correct function, then move on to next question or end of game screen

//if answer incorrect, show incorrect function, then move on to next question or end of game screen

//if they run out of time to answer, show timeout function and then move on to next question or end of game screen

//create end of game screen.  need empty arrays for corrects and incorrects to fall into

