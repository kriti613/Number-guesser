// Game values
let min = 1, max = 10, winningNum = getRandomNum(min,max), guessesLeft = 3;

// UI elements
const game = document.querySelector('#game'),
 minNum = document.querySelector('.min-num'),
 maxNum = document.querySelector('.max-num'),
 guessBtn = document.querySelector('#guess-value'),
 guessInput = document.querySelector('#guess-input'),
 message = document.querySelector('.message');

// Assigning UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listner
game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
});

// Listen for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  
  // Validate
  if(guess === NaN || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`);
  }
  // Check if we win
  if(guess === winningNum){
    
    gameOver(true, `${winningNum} is corret, YOU WIN!`);

  }
  else {
    // Wrong number
    guessesLeft -= 1;

    if(guessesLeft === 0){
      // if we lost
      gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`)

    } else {
      // Game Continues - answer wrong

      
      // Border color
      guessInput.style.borderColor = 'red';

      // Tell user its the wrong number
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');

    }
  }
});

// Game Over
function gameOver(won, msg){
  let color;
  won === true ? color = 'green' : color = 'red';
  // Disable input
  guessInput.disabled = true;
  
  // Change border color
  guessInput.style.borderColor = color;

  // Text color
  message.style.color = color;
  // Set message
  setMessage(msg);
  // Play Again?
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}

// Get winning number
function getRandomNum(min, max){
  return Math.floor(Math.random()*(max-min+1)+min);
}
// Set message
function setMessage(msg, color){
  message.getElementsByClassName.color = color;
  message.textContent = msg;
}