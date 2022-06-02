
var codeBlock =
  '<div id="afterchoose">' +
  '<button id="Rock" value="Rock" onclick="Rock()">Rock</button>' +
  '<button id="Paper" value="Paper" onclick="Paper()">Paper</button>' +
  '<button id="Scissor" value="Scissor" onclick="Scissor()" >Scissor</button>' +
  "</div>";

function ok() {
  document.getElementById("main").innerText =
    "Please choose Rock, Paper or Scissor";
  document.getElementById("ipbtn").innerHTML = codeBlock;
}
var result;

function Rock() {
  var computerChoice = Math.random();
  if (computerChoice < 0.33) {
    computerChoice = "rock";
  } else if (computerChoice > 0.33 && computerChoice < 0.66) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissor";
  }

  var playerInput = document.getElementById("Rock").getAttribute("value");
  if (playerInput !== null) {
    var playerChoice = playerInput.toLowerCase();
  }

  if (playerChoice === computerChoice) {
    result = "Match Tie";
  } else if (playerChoice === "rock" && computerChoice === "scissor") {
    result = "Player Wins";
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    result = "Player Wins";
  } else if (playerChoice === "scissor" && computerChoice === "paper") {
    result = "Player Wins";
  } else {
    result = "Computer Wins";
  }
  //Display result
  document.getElementById("main").innerText =
    "Player choose " +
    playerChoice +
    "\n" +
    "Computer Chose " +
    computerChoice +
    "\n" +
    result;

  document.getElementById("ipbtn").innerHTML = " ";
}

function Paper() {
  var computerChoice = Math.random();
  if (computerChoice < 0.33) {
    computerChoice = "rock";
  } else if (computerChoice > 0.33 && computerChoice < 0.66) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissor";
  }

  var playerInput = document.getElementById("Paper").getAttribute("value");
  if (playerInput !== null) {
    var playerChoice = playerInput.toLowerCase();
  }
  if (playerChoice === computerChoice) {
    result = "Match Tie";
  } else if (playerChoice === "rock" && computerChoice === "scissor") {
    result = "Player Wins";
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    result = "Player Wins";
  } else if (playerChoice === "scissor" && computerChoice === "paper") {
    result = "Player Wins";
  } else {
    result = "Computer Wins";
  }
  //Display result
  document.getElementById("main").innerText =
    "Player choose " +
    playerChoice +
    "\n" +
    "Computer Chose " +
    computerChoice +
    "\n" +
    result;

  document.getElementById("ipbtn").innerHTML = " ";
}

function Scissor() {
  var computerChoice = Math.random();
  if (computerChoice < 0.33) {
    computerChoice = "rock";
  } else if (computerChoice > 0.33 && computerChoice < 0.66) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissor";
  }

  var playerInput = document
    .getElementById("Scissor")
    .getAttribute("value");
  if (playerInput !== null) {
    var playerChoice = playerInput.toLowerCase();
  }

  if (playerChoice === computerChoice) {
    result = "Match Tie";
  } else if (playerChoice === "rock" && computerChoice === "scissor") {
    result = "Player Wins";
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    result = "Player Wins";
  } else if (playerChoice === "scissor" && computerChoice === "paper") {
    result = "Player Wins";
  } else {
    result = "Computer Wins";
  }
  //Display result
  document.getElementById("main").innerText =
    "Player choose " +
    playerChoice +
    "\n" +
    "Computer Chose " +
    computerChoice +
    "\n" +  
     result;
  
  document.getElementById("ipbtn").innerHTML = " ";
}

function cancel() {
    document.getElementById("main").innerHTML =
    "<span style='color: red; font-size:50px;'> Thanks!! Maybe Next Time.</span>";
  
    document.getElementById("ipbtn").innerHTML = " ";
}
