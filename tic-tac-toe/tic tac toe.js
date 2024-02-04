// accessing the buttons
let boxex= document.querySelectorAll(".box")
let resetbrn=document.querySelector("#reset-btn")

// msg,reset btn 
let newgamebtn=document.querySelector("#new-btn")
let msgcontainer = document.querySelector(".msg-container")
let msg=document.querySelector("#msg")

//turn of the players

let playerturno = true //playerturn of O

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],    //winning patterns
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxex.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(playerturno==true){
            box.innerText="O" //player O will play first in this case
            playerturno=false;
        }else{
            box.innerText="X"
            playerturno=true;
        }
        box.disabled = true

        checkwinner();
    })
})


const resetgame=()=>{
    playerturno=true
    enabledboxes();
    msgcontainer.classList.add("hide")

}

const disabledboxex=()=>{
    for(let box of boxex){
        box.disabled=true
    }
}

const enabledboxes=()=>{
    for(let box of boxex){
        box.disabled=false
        box.innerText=""
    }
}


const showwinner=(winner)=>{
    msg.innerText=`Congratulations , winner is player : ${winner}`
    msgcontainer.classList.remove("hide");
    disabledboxex()
}



const checkwinner=()=>{
    for(pattern of winpatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxex[pattern[0]].innerText,boxex[pattern[1]].innerText,boxex[pattern[2]].innerText);
        let posval1 = boxex[pattern[0]].innerText
        let posval2 = boxex[pattern[1]].innerText
        let posval3 = boxex[pattern[2]].innerText
        
        if (posval1 !="" && posval2 !="" && posval3 !=""){
            if(posval1 === posval2 && posval2 === posval3){
                console.log("WINNER",posval1);
                showwinner(posval1)
            }
        }
    }
};

  
newgamebtn.addEventListener("click",resetgame)
resetbrn.addEventListener("click",resetgame)













































