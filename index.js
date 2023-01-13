

let myInput = document.getElementById('pwd')
   var letter = document.getElementById("letter");
   var capital = document.getElementById("capital");
   var number = document.getElementById("number");
   var length = document.getElementById("length");
  // When the user clicks on the password field, show the message box
   myInput.onfocus = function() {
     document.getElementById("message").style.display = "block";
   }
   
   // When the user clicks outside of the password field, hide the message box
   myInput.onblur = function() {
     document.getElementById("message").style.display = "none";
   }
   
   // When the user starts to type something inside the password field
   myInput.onkeyup = function() {

     var lowerCaseLetters = /[a-z]/g;
     if(myInput.value.match(lowerCaseLetters)) {  
       letter.classList.remove("invalid");
       letter.classList.add("valid");
     } else {
       letter.classList.remove("valid");
       letter.classList.add("invalid");
     }
     
     // Validate capital letters
     var upperCaseLetters = /[A-Z]/g;
     if(myInput.value.match(upperCaseLetters)) {  
       capital.classList.remove("invalid");
       capital.classList.add("valid");
     } else {
       capital.classList.remove("valid");
       capital.classList.add("invalid");
     }
   
     // Validate numbers
     var numbers = /[0-9]/g;
     if(myInput.value.match(numbers)) {  
       number.classList.remove("invalid");
       number.classList.add("valid");
     } else {
       number.classList.remove("valid");
       number.classList.add("invalid");
     }
     
     // Validate length
     if(myInput.value.length >= 8) {
       length.classList.remove("invalid");
       length.classList.add("valid");
     } else {
       length.classList.remove("valid");
       length.classList.add("invalid");
     }
   }    




function seterrorsignup(id ,error){

    element = document.getElementById(id); 
    element.getElementsByClassName('formerror')[0].innerHTML = error; 
    console.log(element); 

}


function ValidateEmail(inputText)
{
   
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.match(mailformat))
{


return true;
}
else
{

return false;

}

}

function checkPassword(str)
{
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(str);
}



const signUp = e => {
    let fname = document.getElementById('fname').value,
        lname = document.getElementById('lname').value,
        email = document.getElementById('email').value,
        pwd = document.getElementById('pwd').value,
        cpwd = document.getElementById('cpwd').value;
       
    if(fname.length<1){
        seterrorsignup("firstname" , "length is too short");
        return false ; 
    } 
   let emailcheck =  ValidateEmail(email); 
   if(!emailcheck){
    seterrorsignup("emailvalid" , "please enter the valid email");
    return false ; 
   }

   let passcheck = checkPassword(pwd);
   console.log(passcheck); 
   if(!passcheck){
    seterrorsignup("passwordc" , "Enter the valid password");
    return false ; 
   }
   if(pwd!==cpwd){
    seterrorsignup("confirmpassword" , "passwords does not match");
    return false; 
   }


    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    
    let exist = formData.length && 
        JSON.parse(localStorage.getItem('formData')).some(data => 
            data.email.toLowerCase() == email.toLowerCase()
        );

     if(!exist){
        formData.push({ fname, lname, email, pwd });
        localStorage.setItem('formData', JSON.stringify(formData)   );
        document.querySelector('form').reset();
    
        alert("Account Created");

        location.href = "./signin.html";
      
     }
    else{
        alert("Account Exsist");
    }
     e.preventDefault();

}






function signIn(e) {
    let email = document.getElementById('email').value,
     pwds = document.getElementById('pwds').value;

     let emailcheck =  ValidateEmail(email); 
     if(!emailcheck){
      seterrorsignup("emailvalid" , "please enter the valid email");
      return false ; 
     }

    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    console.log(email , pwds); 
        let exist = formData.length && 
        JSON.parse(localStorage.getItem('formData')).some(data => 
            data.email.toLowerCase() == email.toLowerCase()  && data.pwd== pwds
        );
        console.log(exist); 
    if(!exist){
        alert("Incorrect login credentials");
        
    }

    else{
        sessionStorage.setItem("Test", true);
        sessionStorage.setItem("name", email ); 
        location.href = "/";
    }
    e.preventDefault();
}
