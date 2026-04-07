function getComputerChoice() {
	let random;
	let choice;

	random = Math.floor(Math.random() * 3);
	if (random == 0) {
		choice = "rock";
	} else if (random == 1) {
		choice = "paper";
	} else if (random == 2) {
		choice = "scissors";
	}

	return choice;
}

function getHumanChoice() {
	let choice;
	let valid;
	do {
		choice = prompt("Choose between (r)ock, (p)aper, or (s)cissors: ");
		choice = choice.toLowerCase();
		if (choice == "r" || choice == "rock") {
			valid = true;
			choice = "rock";
		} else if (choice == "p" || choice == "paper") {
			valid = true;
			choice = "paper";
		} else if (choice == "s" || choice == "scissors") {
			valid = true;
			choice = "scissors";
		} else {
			valid = false;
			alert("Please type (r)ock, (p)aper, or (s)cissors.");
		}
	} while (valid == false);

	return choice;
}

let humanScore = 0;
let computerScore = 0;

function playFiveRounds() {
	while (humanScore < 5 && computerScore < 5) {
		let humanChoice = getHumanChoice();
		let computerChoice = getComputerChoice();
		if (humanChoice == "rock" && computerChoice == "scissors") {
			humanScore += 1;
		} else if (humanChoice == "paper" && computerChoice == "rock") {
			humanScore += 1;
		} else if (humanChoice == "scissors" && computerChoice == "paper") {
			humanScore += 1;
		} else if (humanChoice == computerChoice) {
			continue;
		} else {
			computerScore += 1;
		}
		console.log(humanChoice, computerChoice);
		console.log(humanScore, computerScore);
	}
	if (humanScore == 5) {
		alert("You Win!");
	} else if (computerScore == 5) {
		alert("You lose!");
	}
	alert(`You: ${humanScore} vs Computer: ${computerScore}`);
}

playFiveRounds();
