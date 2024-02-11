let hrs=document.getElementById("hrs")
let min=document.getElementById("min")
let sec=document.getElementById("sec")

setInterval(()=>{
let currentime= new Date();

// console.log(currentime.getMinutes());
hrs.innerHTML=(currentime.getHours()<10?"0":"") + currentime.getHours() ;
min.innerHTML=(currentime.getMinutes()<10?"0":"") + currentime.getMinutes() ;
sec.innerHTML=(currentime.getSeconds()<10?"0":"") + currentime.getSeconds() ;
},1000)








