// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  // The first example is done for you. This will change the background colour of the first div
  // when you mouse over it.
  one(), two(), three(), four ()
    
  // Your turn! Create a new function called `two`, then call it from here.
}


// Function 1


function one () {
  // First, we have to find the element:
  var one = document.getElementById('one')

  // Next, we add an event listener to it:
  one.addEventListener('mouseenter', makeBlue)

  // Finally, we add one to make the colour white again
  one.addEventListener('mouseleave', makeWhite)
}


// Function 2


function two () {
  // Finding the element
  var two = document.getElementById('two')

  // Adding event listener enter
  two.addEventListener('mouseenter', makeGreen)

  // Adding event listener leave
  two.addEventListener('mouseleave', makeWhite)
}


// Function 3

function three () {
  // Finding the element
  var three = document.getElementById('three')

  // Adding event listener enter
  three.addEventListener('mouseenter', makeYellow)

  // Adding event listener leave
  three.addEventListener('mouseleave', makeWhite)
}





// Function 4


function four () {
  // Finding the element
  var four = document.getElementById('four')

  // Adding event listener enter
  four.addEventListener('click', makeOrange)

}

// Potential function changes for clicking on and off the div four box:

//



// Changes the background color of event's target

function makeBlue (evt) {
  evt.target.style.backgroundColor = 'blue'
}

function makeWhite (evt) {
  evt.target.style.backgroundColor = 'white'
}

function makeGreen (evt) {
  evt.target.style.backgroundColor = 'green'
}

function makeYellow (evt) {
  evt.target.style.backgroundColor = 'yellow'
}

function makeOrange (evt) {
  evt.target.style.backgroundColor = 'orange'
}