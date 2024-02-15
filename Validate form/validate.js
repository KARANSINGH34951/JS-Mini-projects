const form = document.querySelector("#form")
const username = document.querySelector("#username")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const cpassword = document.querySelector("#cpassword")
// const error1 = document.querySelector(".error")

form.addEventListener("submit",(e)=>{
  e.preventDefault();
  validateinputs();
})



function validateinputs(){
  const usernameval =username.value.trim()
  const emailval=email.value.trim()
  const passwordval=password.value.trim()
  const cpasswordval=cpassword.value.trim()
  if(usernameval===""){
    seterror(username,"username cannot be blank")
  
  }
  else{
    setsucess(username)
  }

  if(emailval===""){
    seterror(email,"email cannot be blank")
    
  }
  else if(!validdateemail(emailval)){
    seterror(email,"email is not valid")
  }
  else{
    setsucess(email)
  }

  if(passwordval==="" ){
    seterror(password,"password cannot be blank")
  }
  else if(passwordval.length<=8){
    seterror(password,"password should be more than 8 characters")
  } 
  else{
    setsucess(password)
  }

  if(cpasswordval===""){  
    seterror(cpassword,"password cannot be blank")
  }
  else if(passwordval !== cpasswordval){
    seterror(cpassword,"password does not match")
  }
  else{
    setsucess(cpassword)
  }

}

function seterror(element,message){

  const inputgroup = element.parentElement;
  const errorElement= inputgroup.querySelector(".error")

  errorElement.innerText=message;
  inputgroup.classList.add("error")
  inputgroup.classList.remove("success")
}

function setsucess(element){

  const inputgroup = element.parentElement;
  const errorElement= inputgroup.querySelector(".error")

  errorElement.innerText="";
  inputgroup.classList.add("success")
  inputgroup.classList.remove("error")
}

const validdateemail=((email)=>{
  return String(email)
  .toLowerCase()
  .match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
})


// function seterror(usernameval,emailval,passwordval,cpasswordval){
//   if(usernameval=="" || emailval=="" ||passwordval=="" || cpasswordval==""){
//     error1.innerHTML +="reuired to fill all the boxes"
//   }
// }






