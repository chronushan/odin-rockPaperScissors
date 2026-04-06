function getComputerChoice() {
	let random;
	let choice;
	do {
		random = Math.floor(Math.random() * 10);
		if (random < 4) {
			// Random = 1~3
			choice = "rock";
		} else if (random < 7) {
			// Random = 4~6
			choice = "paper";
		} else {
			// Random = 7~9
			choice = "scissors";
		}
	} while (choice == 0);

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

console.log(`Human: ${getHumanChoice()}`);
console.log(`Computer: ${getComputerChoice()}`);
