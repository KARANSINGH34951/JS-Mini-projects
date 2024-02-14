let box1outer=document.getElementsByClassName("box-1");
let box2outer=document.getElementsByClassName("box-2");
let box1inner=document.getElementById("box1-inner");
let box2inner=document.getElementById("box2-inner");
let btn=document.getElementById("btn");

// btn.addEventListener("click",display);

function display(){
    
  fetch("https://official-joke-api.appspot.com/jokes/programming/random")

  .then((res)=>{
    if(!res){
      throw new console.error("error occured");
    }
    return res.json()
  })

  .then((msg)=>{
    console.log(msg);
    console.log(msg[0]["setup"]);
    console.log(msg[0]["punchline"]);
    console.log(Object.entries(msg));
    box1inner.innerHTML="PREM  :" + msg[0]["setup"];
    // box1outer[0].style.background="lightblue";
    box2inner.innerHTML="RAMU  :" + msg[0]["punchline"];
    // box2outer[0].style.background="lightblue";
    box1outer[0].style.backgroundImage="url(img-1.jpeg)";
    box2outer[0].style.backgroundImage="url(img-2.jpeg)";
  })

  .catch((err)=>{
    console.log(err);
  })
}

btn.addEventListener("click",display);
