let input=document.querySelector('.input')
let btn =document.querySelector('.btn')
let imgbox= document.querySelector('.imgbox')
let div =document.querySelector('.qr')

btn.addEventListener('click',work)


function work(){
    
if(input.value==""){
    alert("please enter the value")
}else{
    imgbox.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+input.value;

    div.classList.add('qr1')
}

}