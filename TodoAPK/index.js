let parent= document.querySelector('.main-ul')
let data =document.querySelector('.main-input')
//function to add list of task
function add(){
    if(data.value==''){
        alert('plz add the Task')
    }
    else{
        let li=document.createElement("li")
        li.innerHTML=data.value
        parent.appendChild(li)
        let ico =document.createElement('span')
        li.appendChild(ico).innerHTML="&#128473";
        save()
    }

data.value=''
}
// function to delete and pass
let ul=document.querySelector('.main-ul')

ul.addEventListener('click',function(e){
if(e.target.tagName==='LI'){
e.target.classList.toggle('checked')
save()
}else if(e.target.tagName=='SPAN'){
e.target.parentElement.remove()
save()
}

})
//function to save data
function save(){
    localStorage.setItem("data", ul.innerHTML)
}
function showdata(){
 ul.innerHTML= localStorage.getItem('data')
}
showdata()







