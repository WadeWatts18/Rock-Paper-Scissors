let userScore = 0; 
let computerScore = 0;
var userChoice;
var userName = prompt("Enter user name: ");
const userLabel_id = document.getElementById("user-label");
	userLabel_id.innerHTML = userName;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");

// function getUserName () {
// 	var userName = prompt("Enter user name: ");
// 	userLabel_id.innerHTML = userName;
// }
function getComputerChoice() {
	const choices = ['Rock','Paper','Scissors'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function win (userChoice, computerChoice) {
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;

	// `` is used to display string without using + or "" but to 
	// display variable it should be inside ${}
	result_p.innerHTML = `${userName} picked ${userChoice}. Computer picked ${computerChoice}.   <br><br> ${userName} wins!!`;
	document.getElementById(userChoice).classList.add("green-glow");
	setTimeout(function(){ document.getElementById(userChoice).classList.remove("green-glow")}, 300);
}

function lose (userChoice, computerChoice) {
	computerScore++;
	computerScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${userName} picked ${userChoice}. Computer picked ${computerChoice}.   <br><br> ${userName} loses!!`;
	document.getElementById(userChoice).classList.add("red-glow");
	setTimeout(function(){ document.getElementById(userChoice).classList.remove("red-glow")}, 300);
}

function draw (userChoice, computerChoice) {
	userScore = 0;
	computerScore = 0; 
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${userName} picked ${userChoice}. Computer picked ${computerChoice}.   <br><br> DRAW!! ** GAME RESET **`;
	document.getElementById(userChoice).classList.add("gray-glow");
	setTimeout(function(){ document.getElementById(userChoice).classList.remove("gray-glow")}, 300);
}


function game (userChoice) {
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice) {
		case "RockScissors": //rs
		case "PaperRock": //pr
		case "ScissorsPaper": //sp
			win(userChoice, computerChoice);
			break;
		case "RockPaper"://rp
		case "PaperScissore"://ps
		case "ScissorsRock"://sr
			lose(userChoice, computerChoice);
			break;
		case "RockRock":
		case "PaperPaper":
		case "ScissorsScissors":
			draw(userChoice, computerChoice);
			break;
	}
}


function main(){

	rock_div.addEventListener('click', function(){
		game("Rock");
	})

	paper_div.addEventListener('click', function(){
		game("Paper");
	})

	scissors_div.addEventListener('click', function(){
		game("Scissors");
	})
}

main();