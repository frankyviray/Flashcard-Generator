var BasicCard = require("./BasicCard.js")
var ClozeCard = require("./ClozeCard.js")
var inquirer = require("inquirer")

var president = new BasicCard(
    "Who was the first president of the United States?", "George Washington");
var presidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.");

var theMVP = new BasicCard(
    "Who has won the most NFL finals MVP awards?", "Tom Brady");
var theMVPCloze = new ClozeCard(
    "...has won the most NFL finals MVP awards.", "Tom Brady"
)

var questions = [president, presidentCloze, theMVP, theMVPCloze]

var current;
function chooseQuestion() {
    var indexChoice = Math.floor(Math.random() * 16 + 1)
    current = questions[indexChoice];
    return current[Object.keys(current)[0]]
}


function ask() {
    var choice = chooseQuestion();
    inquirer.prompt([
        {
            type: "input",
            name: "userInput",
            message: choice
        }
    ]).then(function (user) {
        console.log(user.userInput)
        if (user.userInput === current[Object.keys(current)[1]]) {
            console.log("correct")
            ask();
        }
        else {
            console.log("the answer is" + current[Object.keys(current)[1]])
            ask();
        }
    })
}

ask();