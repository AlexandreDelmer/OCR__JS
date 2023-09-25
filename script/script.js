let userInput = document.getElementById("inputEcriture")
console.log(userInput)

let validationButton = document.getElementById("btnValiderMot")
console.log(validationButton)

let proposedWord = document.querySelector(".zoneProposition")
console.log(proposedWord)

let scoreDisplay = document.querySelector(".zoneScore span")
console.log(scoreDisplay) 

let btnChoice = document.querySelectorAll(".optionSource input")
console.log(btnChoice)

let nouveauTitre = document.createElement("h2")
let headerTag = document.querySelector("header")
console.log(headerTag)
headerTag.appendChild(nouveauTitre)
nouveauTitre.textContent = "... vraiment plus vite !"