// set the scores to a specified number (stored in var) doesnt need to be specific 
let countHome = 0
let countGuest = 0

// create a variable and then grab the element id (HTML) you want to display the above variables in.
let scoreElHome = document.getElementById("home-points")
let scoreElGuest = document.getElementById("guest-points")


/* create a function that links to the button (onclick) being called in the HTML, 
take the variable created and then change it to mae it increment, update your HTML text content
with the updated variable */
function addOneHome() {
   countHome = countHome + 1
   scoreElHome.textContent = countHome
}

function addTwoHome() {
   countHome = countHome + 2
   scoreElHome.textContent = countHome
}

function addThreeHome() {
   countHome = countHome + 3
   scoreElHome.textContent = countHome
}

function addOneGuest() {
   countGuest = countGuest + 1
   scoreElGuest.textContent = countGuest
}

function addTwoGuest() {
   countGuest = countGuest + 2
   scoreElGuest.textContent = countGuest
}

function addThreeGuest() {
   countGuest = countGuest + 3
   scoreElGuest.textContent = countGuest
}

