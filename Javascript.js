


function call(){
    alert("THANKS FOR APPROACHING US :)")
}


var data =document.getElementById("mob");
let data1 =document.getElementById("mob-nav-list")

//mobile NAV
function work(){
    if(data1.style.left=="-50%"){
data1.style.left="0px"
    }else{
        data1.style.left="-50%";

    }
}
// mobile nav
function work1(){
    if(data1.style.left=="0px"){
        data1.style.left="-50%"
    }
    
    
}
// From to mail
function sendfile(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "kingbala62@gmail.com",
        Password : "E4F768F366055114311CF85DD69D21F6C026",
        To : 'vigneshvickybsc1999@gmail.com',
        From : "kingbala62@gmail.com",
        Subject :document.getElementById("subject").value,
        Body : "Name: "+ document.getElementById('name').value
        + "<br> email: "+ document.getElementById('email').value
        + "<br> Number: "+ document.getElementById('num').value
        + "<br> Message: "+ document.getElementById("message").value
    
    }).then(
      message => alert(message)
    );
    }
