
let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];

let userClickedPattern = [];

let start = false;

let level = 0;

$(document).keydown(function() {
  if (!start) {
    $("#level-title").text("Level " + level);
    nextSequence();
    start = true;
  }
});

$(".btn").click(function() {

  let userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);

  animatePress(userChosenColour);
  
  playSound(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success");

      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Refresh to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 280);

      startOver();
    }
}


function nextSequence() {

    
    let randomNumber = Math.floor(Math.random() * 4);
    
    let randomChosenColour = buttonColours[randomNumber];
    
    gamePattern.push(randomChosenColour);
    
    $("#level-title").text("Level " + level);
    
    $("#" + randomChosenColour).fadeOut().fadeIn();
    
    playSound(randomChosenColour);
    
    level++;

    userClickedPattern = [];
}

function animatePress(currentColor) {

  $("#" + currentColor).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);

}

function playSound(color) {

  const audio = new Audio("./sounds/" + color + ".mp3");

  audio.play();
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
