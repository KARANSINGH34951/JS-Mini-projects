console.log("we are in js")

const circle=document.getElementById("circleid")
const redbtn=document.querySelector(".red")
const grnbtn=document.querySelector(".green")
const yelbtn=document.querySelector(".yellow")


redbtn.addEventListener("click",()=>{
    circle.style.backgroundColor ="red" 
})

grnbtn.addEventListener("click",()=>{
    circle.style.backgroundColor ="green" 
})

yelbtn.addEventListener("click",()=>{
    circle.style.backgroundColor ="yellow" 
})



































