const questions =[
    {question:'what is java',
    answers:[
        {text:'It is a programming language',correct:true},
        {text:'It is a script language',correct:false },
        {text:"It's not a programming language", correct : false },
        {text:"It's markup language", correct : false },

    ]

},
{question:'what is javascript',
answers:[
    {text:'It is a nrml lang',correct:false},
    {text:'It is a script lang',correct:true },
    {text:"It's not a language", correct : false },
    {text:"It's embedded language", correct : false },

]

},
{question:'what is CSS',
answers:[
    {text:'It is a style sheet',correct:true},
    {text:'It is a script language',correct:false },
    {text:"It's a programming language", correct : false },
    {text:"It's embedded language", correct : false },

]

},
{question:'what is ReactJS',
answers:[
    {text:'It is a style sheet',correct:false},
    {text:'It is a JS Framework',correct:false },
    {text:"It's a JS Library ", correct : true },
    {text:"It's a API language", correct : false },

]

},

]

let questionElement = document.getElementById('question')
let answerParent =document.querySelector('.div3')
let nextButton =document.getElementById('btn')

let questionIndex =0
let score =0;
function startQuiz(){
    questionIndex=0
    score=0
    renderQuestion()
}
startQuiz()
function renderQuestion (){
    resetState()
    const currentQuesiton =questions [questionIndex];
    questionElement.innerHTML=`${questionIndex+1}. ${currentQuesiton.question}`

    //render option//
    currentQuesiton.answers.map(option=>{
        let button =document.createElement("button")
        button.innerHTML=option.text
        button.classList.add('btn')
        answerParent.appendChild(button)

    //validate answer//
    if(option.correct){
        button.dataset.correct=option.correct
    }
    button.addEventListener('click',(e)=>{
        let clickbtn=e.target
        let correctbtn =clickbtn.dataset.correct=='true'
         if(correctbtn){
            clickbtn.classList.add('correct')
            score++
            console.log(score)

         }else{clickbtn.classList.add('incorrect')}

         Array .from(answerParent.children).forEach(btn=>{
            if(btn.dataset.correct=='true'){
                btn.style.backgroundColor='green'
                btn.classList.add('correct')
            }else{
                btn.disabled='true'
            }
            nextButton.style.display='block'
            nextButton.innerHTML='Next'
         })

       
         
    })
    })
}
//reset every button child for next question//
function resetState(){
while(answerParent.firstChild){
    answerParent.removeChild (answerParent.firstChild)
    nextButton.style.display='none'
}
}
//function for render next ques after clicked the next bTN//
nextButton.addEventListener ('click', handleclick)
function handleclick(){
    if(questionIndex<questions.length){
        nextquestion()
    }else{
        startQuiz()
    }
}

function nextquestion(){
    resetState();
    questionIndex++
    if(questionIndex<questions.length){
        renderQuestion()
        
    }else{
        showScore()
    }
}
//for showing score//
function showScore (){
    questionElement.innerHTML= `your score is ${score} out of ${questionIndex}`
    nextButton.innerHTML='Retry'
    nextButton.style.display='block'

    
}