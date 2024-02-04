let total=0
let header=document.getElementById("header")
let btn=document.getElementById("counter")
btn.addEventListener("click",function(){
    total+=1
    header.innerText=total;

});
let btn1=document.getElementById("counter2")
btn1.addEventListener("click",function(){
    total-=1
    header.innerText=total;

});

let total1 = document.getElementById("total1")

let save=document.getElementById('save')
save.addEventListener("click",function(){
    total1.textContent="total number of count="+total;
});


let reset=document.getElementById("reset").addEventListener("click",function(){
    total=header.innerText=0;
})






