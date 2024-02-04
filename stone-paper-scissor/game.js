let userscore=0;
let computerscore=0

const choices =document.querySelectorAll(".choice")

const userscoretext=document.querySelector("#user-score")
const compterscoretext=document.querySelector("#computer-score")
let msg= document.getElementById("msg")

const gencompchoice=()=>{
    //randome
    let arr1=["rock","paper","scissors"]
    const computerchoice=Math.floor(Math.random()*3)
    // console.log("computer clicked",arr1[computerchoice])
    return arr1[computerchoice]
}


choices.forEach((choice)=>{
    console.log(choice)
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id")
        console.log("user choice : ",userchoice)
        const computerturn=gencompchoice()
        console.log("computer choice : ",computerturn)

        if (userchoice===computerturn){
            msg.innerText="Draw"  
        }
        else if((userchoice=="rock" && computerturn=="paper") || (userchoice=="paper" && computerturn=="scissors")|| (userchoice=="scissors" && computerturn=="rock")){
            msg.innerText="COMPUTER WON"
            computerscore=computerscore+1
            compterscoretext.innerText=computerscore
    
        }
        else{
            msg.innerText="USER WON"
            userscore=userscore+1
            userscoretext.innerText=userscore
            
        }   
    })

})

// if (userscore>=10){
//     msg.innerText=`OVERALL WINNER USER`
// }
// else if(userscore===computerscore){
//     msg.innerText="ITS A DRAW"
// }
// else{
//     msg.innerText=`OVERALL WINNER COMPUTER`

// }























