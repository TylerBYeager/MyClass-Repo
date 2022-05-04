var rpsGame = {
  wins : 0,
  ties : 0,
  losses : 0,
  // Array of options for computer to pick from
  options : ["R", "P", "S"],
  playGame: function() {
    // Ask user for their choice
    var userChoice = this.promptUser()

    var computerChoice = this.generateComputerChoice();
    this.alertComputerChoice(computerChoice);
    this.checkUserComputerChoiceCondition(userChoice ,computerChoice);
    // this.alertStats();
    // this.playAgain();
  
  },
  promptUser: function (){
  var userChoice = window.prompt("Enter R, P, or S:");
  // If user pressed Cancel, immediately end function
    if (!userChoice) {
      return;
    }
    // Convert to uppercase to make comparisons easier
    userChoice = userChoice.toUpperCase();
    if(userChoice !== "R" || userChoice !== "P" || userChoice !== "S"){
      this.promptUser();
    }
    return userChoice;
  },
  generateComputerChoice: function(){
    // Get random index from array of options
    var index = Math.floor(Math.random() * this.options.length);
    var computerChoice = this.options[index];
    return computerChoice;
  },
  alertComputerChoice: function (randomComputerChoice){
    window.alert("The computer chose " + randomComputerChoice);
  },
  checkUserComputerChoiceCondition: function(userChoice ,computerChoice){
    // If choices are the same, it's a tie
  if (userChoice === computerChoice) {
    this.ties++;
    window.alert("It's a tie!");

    // Check every win condition for the player
  } else if (
    (userChoice === "R" && computerChoice === "S") || 
    (userChoice === "P" && computerChoice === "R") || 
    (userChoice === "S" && computerChoice === "P")
  ) {
    this.wins++;
    window.alert("You win!");

    // If above conditions failed, assume player lost
  } else {
    this.losses++;
    window.alert("You lost!");
  }
    this.alertStats();
    this.playAgain();
  },
  alertStats: function (){
    // Print stats with line breaks
    window.alert("Stats:\nWins: " + this.wins + "\nLosses: " + this.losses + "\nTies: " + this.ties);
  },
  playAgain: function(){
  // Ask user to play again
  var playAgain = window.confirm("Play again?");

  // If user pressed OK, run the function again
    if (playAgain) {
      this.playGame();
    }
  }

}//end of Obj




// Run the game for the first time
rpsGame.playGame();
