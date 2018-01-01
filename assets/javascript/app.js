

//Name function that sets start button and intial screen

$(document).ready(function() {

	function initialScreen () {
			startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
			$(".mainArea").html(startScreen);
	}
 

//Create functon that is repsonsive to "start button" and generates HTML

initialScreen();
});

$("body").on("click", ".start-button", function(event) {
		event.preventDefault();
		generateHTML();
		timerWrapper();
});//Closes start-btton click

$("body").on("click", ".answer", function(event) {
	//when question is answered true
	//answeredQuestion = true; 
	//alert("correct");


	selectedAnswer = $(this).text();
	if(selectedAnswer === correctAnswers[questionCounter]) {

		clearInterval(theClock);
		generateWin();

	}

	else {
	//alert("wrong answer!")
		clearInterval(theClock);
		generateLoss();
	}
});//Close.answer click 

$("body").on("click", ".reset-button", function(event) {
		resetGame();
});//Closes reset-button click 



	//Closes jQuery wrapper

function generateLossDueToTimeOut() {
		unansweredTally++;
		gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time! The correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/images/wrong.gif'>";
		$(".mainArea").html(gameHTML);
		setTimeout(wait, 5000); //change to 4000 or other amount 



}

function generateWin() {
	correctTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 5000);  //  change to 4000 or other amount
}

function generateLoss() {
	incorrectTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/images/wrong.gif'>";
		$(".mainArea").html(gameHTML);
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 5000); //  change to 4000 or other amount
}

function generateHTML() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. " + answerArray[questionCounter][1]+ "</p><p class='answer'>C. " + answerArray[questionCounter][2] + "</p><p class='answer'>D. " + answerArray[questionCounter][3] + "</p>";
	$(".mainArea").html(gameHTML);
}

function wait () {
	if (questionCounter < 15) {
		questionCounter++;
		generateHTML();
		counter = 30;
		timerWrapper();

	}
	else {
		finalScreen();

	}
}

function timerWrapper() {
	theClock = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(theClock);
			generateLossDueToTimeOut();

		}

		if (counter > 0) {
			counter--;

		}
		$(".timer").html(counter);
	}

}
function finalScreen() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
	$(".mainArea").html(gameHTML);
}

function resetGame() {
	questionCounter = 0;
	correctTally = 0;
	incorrectTally = 0;
	unansweredTally = 0;
	counter = 30;
	generateHTML();
	timerWrapper();
}

//set global variables 
let startScreen;
let gameHTML;
let counter = 30; 
let questionArray = ["What is the name of the company that the characters work for?", 
					"Which character nearly died of a heart-attack during Dwight's 'Safety Training', during which a fire was simualted?",
					"Which character tore his scrodem during a dance-off on the eve of Jim and Pam's wedding?", 
					"Who did Michael Scott secretly go to Jamaica with?", 
					"Who does Michael Scott openly loathe in the office?",
					"What is Creed Bratton's job title?",
					"What is Erin Hannon's real first name?",
					"What school did Pam attend in New York for 3 months?", 
					"What disease was Meredith found to have, after Michael hit her with his car?",
					"Which character, after previously blackmailing Angela, reveals openly to the office that Dwight and Angela are having an affair?",
					"Which of the following actors is also a writer for 'The Office'?",
					"Which character was briefly addicted to drugs?",
					"The first time Jim was going to propose, who beat him to it and proposed to someone first?",
					"Which character witnesses Michael Scott falling into the Koi pond, and does not help him?"];

let answerArray = [["Staples", "Prince Family Paper", "Dunder Mifflin", "Michael Scott Paper Company"], 
					["Creed Bratton", "Stanley Hudson", "Kelly Kapoor", "David Wallace"], 
					["Andy Bernard", "Dwight Schrute", "Kevin Malone", "Oscar Martinez"], 
					["Angela Martin", "Meredith Palmer", "Jan Levinson", "Karen Filippelli"],
					["Hank", "Toby Flenderson", "Holly Flax", "Dwight Schrute"],
					["Quality Assurance", "Human Resources", "Sales", "Marketing"],
					["Kimmy", "Angela", "Veronica", "Kelly"],
					["NYU", "FIT", "Pratt", "Parsons"],
					["Chlamydia", "Rabies", "Parkinsons", "Kidney Disease"],
					["Dwight Schrute", "Phyllis Vance-Alchetron", "Ryan Howard", "Darryl Philbin"],
					["Mindy Kaling (Kelly Kapoor)", "Rain Wilson (Dwight Schrute)", "Steve Carell (Michael Scott)", "John Krasinski (Jim Halpert)"],
					["Kevin Malone", "Stanley Hudson", "Jan Levinson", "Ryan Howard"], 
					["Michale Scott", "Andy Bernard", "Roy Anderson", "Bob Vance"],
					["Jim Halpert", "Dwight Schrute", "Jan Levinson", "Darryl Philbin"]];

let imageArray = ["<img class='center-block img-right' src='assets/images/dundermifflin.jpeg'>", "<img class='center-block img-right' src='assets/images/stanley.gif'>", "<img class='center-block img-right' src='assets/images/andy.gif'>", "<img class='center-block img-right' src='assets/images/jan.jpeg'>", "<img class='center-block img-right' src='assets/images/toby.jpeg'>", "<img class='center-block img-right' src='assets/images/creed.jpeg'>", "<img class='center-block img-right' src='assets/images/erin.jpeg'>", "<img class='center-block img-right' src='assets/images/pam.jpeg'>", "<img class='center-block img-right' src='assets/images/rabies.jpeg'>", "<img class='center-block img-right' src='assets/images/phyllis.gif'>", "<img class='center-block img-right' src='assets/images/writer.jpeg'>", "<img class='center-block img-right' src='assets/images/ryan.gif'>", "<img class='center-block img-right' src='assets/images/politeness.gif'>", "<img class='center-block img-right' src='assets/images/koi.gif'>"];
let correctAnswers = ["C. Dunder Mifflin", "B. Stanley Hudson", "A. Andy Bernard", "C. Jan Levinson", "B. Toby Flenderson", "A. Quality Assurance", "D. Kelly", "C. Pratt", "B. Rabies", "B. Phyllis Vance-Alchetron", "A. Mindy Kaling (Kelly Kapoor)", "D. Ryan Howard", "B. Andy Bernard", "A. Jim Halpert"];
let questionCounter = 0;
let selecterAnswer;
let theClock;
let correctTally = 0;
let incorrectTally = 0;
let unansweredTally = 0;
