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

function playRound(humanChoice) {
	let computerChoice = getComputerChoice();
	if (humanChoice == "rock" && computerChoice == "scissors") {
		humanScore += 1;
	} else if (humanChoice == "paper" && computerChoice == "rock") {
		humanScore += 1;
	} else if (humanChoice == "scissors" && computerChoice == "paper") {
		humanScore += 1;
	} else if (humanChoice == computerChoice) {
		alert("Tie, try again.");
	} else {
		computerScore += 1;
	}
}

const buttons = document.querySelectorAll("button");

buttons.forEach((node) => console.log(node));

buttons.forEach((item) => {
	item.addEventListener("click", (event) => {
		event.preventDefault();
		playRound(item.textContent.toLowerCase());
		const score = document.querySelector("#score");
		score.textContent = `Your Score: ${humanScore}\nComputer Score: ${computerScore}`;
	});
});
