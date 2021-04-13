// Usage: getRandomInt(6)
// Outputs a random number between 1 and 6
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1
}

function pageLoad() {
  // we start with the dice from the first practice exercise
  let die1 = getRandomInt(6)
  let die2 = getRandomInt(6)
  let total = die1 + die2
  let output

  // 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇
  
  // 🔥 YOUR CODE GOES HERE. 🔥
  // the value of the variable 'output' is already set to display on the page
  // write an if.. else if.. else statement to evaluate the value of 'total'
  // and set the value of 'output' appropriately
  if (total == 7 || total == 11) {
    output = 'you win!'
  } else if (total == 2 || total == 3 || total == 12) {
    output = 'you lose!'
  } else {
    output = `the point is ${total}`
  }
  //  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆

  // Leave this alone
  document.querySelector('.die1').setAttribute('src', `../images/dice/${die1}.png`)
  document.querySelector('.die2').setAttribute('src', `../images/dice/${die2}.png`)
  document.querySelector('.total').innerHTML = total
  document.querySelector('.output').innerHTML = output
}