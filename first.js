let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");

const userScorePara =document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const msg=document.querySelector("#msg");
const genCompChoice =()=>{
    const options=["rock","paper","scissors"];
   const ranIdx= Math.floor(Math.random()*3);
   return options[ranIdx];
}
const showWinner=(userWin,userchoice,compChoice)=>{
if(userWin){
    userScore++;
    console.log(userScore);
    userScorePara.innerText=userScore;
    msg.innerText=`You Won .your ${userchoice} beats ${compChoice}`;
    msg.style.backgroundColor ="green";
}
else{
    compScore++;
    msg.innerText=`You Lose . ${compChoice} beats your ${userchoice}`;
    msg.style.backgroundColor ="red";
    compScorePara.innerText=compScore;
}
}

const playgame=(userchoice)=>{
    console.log("userchoice=",userchoice);
    // Generate computer choice
    const compChoice=genCompChoice();
    console.log("ComputerChoice=",compChoice);

    if(userchoice===compChoice){
        console.log("Game was Drawn");
        msg.innerText="Game was Drawn.Play Again";
        msg.style.backgroundColor=" #081b31";
    }
    else{
        let userWin=true;
        if(userchoice==="rock"){
             // scissors,paper
             userWin =compChoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            // rock,scissors
            userWin=compChoice==="rock"?true:false;
        }
        else{
            //rock,paper
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userchoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
})

