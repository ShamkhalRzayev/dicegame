const rollDice = document.querySelector(".roll-dice");
const dice = document.querySelector(".dice");
const hold = document.querySelector(".hold");
const newGame = document.querySelector(".new-game");
const buttonRules = document.querySelector(".button-rules");
const rules = document.querySelector(".rules ul");

const sectionLeft = document.querySelector(".left");
const sectionRight = document.querySelector(".right");

const currentScoreLeft = document.querySelector(".current-score-left");
const currentScoreRight = document.querySelector(".current-score-right");
const totalScoreLeft = document.querySelector(".total-score-left");
const totalScoreRight = document.querySelector(".total-score-right");

let playerDices = [];

let playerDicesCurrentSum = 0;

let playerDicesTotal = [];

let player1DicesTotalSum = [];
let player2DicesTotalSum = [];

const reducer = (previousValue, currenvalue) => previousValue + currenvalue;

let currentPlayer = 0;
let randomNumber;


const showDice = function(){
    randomNumber = Math.ceil(Math.random() * 6);
    dice.setAttribute("src", `./images/dice-${randomNumber}.png`);
    dice.classList.remove("hidden");  
    
}

const hideDice = function(){
    dice.classList.add("hidden");  
    playerDicesCurrentSum = 0;
    playerDices = [];
    currentScoreLeft.textContent = playerDicesCurrentSum;
    currentScoreRight.textContent = playerDicesCurrentSum;
}


/*****************************/
/*****ROLL DICE */
/*****************************/



rollDice.addEventListener("click", function(){

if(!sectionRight.classList.contains("winner") && !sectionLeft.classList.contains("winner")){
    
    showDice();

    if(randomNumber !== 1){

    playerDices.push(randomNumber);
    playerDicesCurrentSum = playerDices.reduce(reducer);
    playerDicesTotal.push(playerDicesCurrentSum);

        if(currentPlayer === 0) {
        currentScoreLeft.textContent = playerDicesCurrentSum;
        }
        if(currentPlayer === 1) {
        currentScoreRight.textContent = playerDicesCurrentSum;
        }
    
    }


    if(randomNumber === 1){

        sectionLeft.classList.toggle("active");
        sectionRight.classList.toggle("active");
        playerDicesCurrentSum = 0;
        currentScoreLeft.textContent = playerDicesCurrentSum;
        currentScoreRight.textContent = playerDicesCurrentSum;
        playerDices = [];
        
        if(currentPlayer === 0) {
            currentPlayer = 1;
        }

        else {
            currentPlayer = 0;
        }

    }
    
}

});


/*****************************/
/*****ROLL DICE */
/*****************************/


hold.addEventListener("click", function(){
    
    if(!sectionRight.classList.contains("winner") && !sectionLeft.classList.contains("winner")){

    sectionLeft.classList.toggle("active");
    sectionRight.classList.toggle("active");

    if(currentPlayer === 0) {
        
        player1DicesTotalSum.push(playerDicesCurrentSum);
        totalScoreLeft.textContent = player1DicesTotalSum.reduce(reducer);
        currentPlayer = 1;
        hideDice();

        if(player1DicesTotalSum.reduce(reducer) >= 50){
            sectionLeft.classList.add("winner");
       
        }
    }

    else{
        player2DicesTotalSum.push(playerDicesCurrentSum);
        totalScoreRight.textContent = player2DicesTotalSum.reduce(reducer);
        currentPlayer = 0;
        hideDice();

        if(player2DicesTotalSum.reduce(reducer) >= 50){
            sectionRight.classList.add("winner");
         
        }

    }
    
}

})


/*****************************/
/*****NEW GAME */
/*****************************/

newGame.addEventListener("click", function(){

    sectionLeft.classList.remove("winner");
    sectionLeft.classList.add("active");
    sectionRight.classList.remove("winner");
    sectionRight.classList.remove("active");

    hideDice();

    currentPlayer = 0;

 
    playerDicesTotal = [];
    player1DicesTotalSum = [];
    player2DicesTotalSum = [];

    totalScoreLeft.textContent = 0;
    totalScoreRight.textContent = 0;

})


/*****************************/
/*******BUTTON RULES */
/*****************************/

buttonRules.addEventListener("click", function(){
    rules.classList.toggle("scaled");
})