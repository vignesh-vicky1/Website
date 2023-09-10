const Apikey= '782a08a4b55d9919749012611d329250'
const Apiurl ="https://api.openweathermap.org/data/2.5/weather?units=Metric"



    

let btn =document.querySelector('.btn')
btn.addEventListener('click',apicall);
function apicall(){
//API REQUEST//
  let input =document.querySelector('.input').value
    let inputBox=document.querySelector('.input')
  
 let http =new XMLHttpRequest()
 http.open("GET", Apiurl +`&q=${input}`+`&appid=${Apikey}`)
 http.send();
 

 //DATA retrive FUN//
 http.onload=function(){
  let Data =http.response
  //DATA1 is API data//
  let error =document.querySelector('.error')
  const elemdiv =document.querySelector('.weather')
  if(http.status==404){
    elemdiv.style.display="none"
    error.style.display="block"
  }else{
    error.style.display="none"
    elemdiv.style.display="block"
  let Data1=JSON.parse(Data) 
  console.log(Data1.name)
  

  //Weather APP contents//

const degree =document.querySelector('.degree')
degree.innerHTML=Math.round( Data1.main.temp)+"°C"
console.log(Data1)

const wind =document.querySelector('.p0')
wind.innerHTML=`${Data1.wind.speed}Km/h`
const humidity=document.querySelector('.p')
humidity.innerHTML=`${Data1.main.humidity}%`
const city =document.querySelector('.cityName')
city.innerHTML=input

 }




 }

inputBox.value='';

}
