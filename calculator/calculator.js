let displaybox=document.querySelector(".displaybox")
let buttons= document.querySelectorAll("button")

let string=""

let arr = Array.from(buttons);

arr.forEach(buttons=>{
  buttons.addEventListener("click",(e)=>{
    if(e.target.innerHTML=="="){
      string=eval(string);
      displaybox.value=string;
    }
    else if(e.target.innerHTML=="AC"){
      string="";
      displaybox.value=string
    }
    else if(e.target.innerHTML=="DEL"){
      string=string.substring(0,string.length-1);
      displaybox.value=string
    }
    else{
      string+=e.target.innerHTML
      displaybox.value=string
    }

  })
})







 



















