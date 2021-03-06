let questions = [
    {
        id : 1 ,
        question : "what's is the name of black panthers kingdom?" ,
        answer : "wakanda",
        options :[ "makanda" , "wakanda" , "lambina" , "wakaland" ,]
    },
    {
        id : 2 ,
        question : "who is the father of thanos" ,
        answer : "alars" ,
        options : ["karen" , "alars" , "en sabaah nur" , "joe"]

    },
    {
        id : 3 ,
        question : "what is thors mothers name" ,
        answer : "Frigga" ,
        options : ["karen" , "frigga" , "ageir" , "alfid"]
    },
    {
        id : 4 ,
        question : "what was captain americas height before" ,
        answer : "5'4" ,
        options : ["4'11" , "5'11" , "5'9" , "5'4"]
    },
    {
        id : 5 ,
        question : "what was the name of dwarf of nidavellir" ,
        answer : "eitri" ,
        options : ["steve" , "walsh" , "eitri" , "eric"]
    },
    {
        id : 6 ,
        question : "finish the scentenceby captain america- hulk ___________" ,
        answer : "smash" ,
        options : ["smash" , "kick ass" , "do it" , "good luck"]

    }
]


let  value = JSON.stringify(questions)
localStorage.setItem("question",value)

let question_count = 0 , points = 0 ;

window.onload = function (){
    show(question_count)
}

function show(count){
    let question = document.getElementById("questions")
    let [first,second,third,fourth] = questions[count].options

 question.innerHTML = `
 <h2>${questions[count].question}</h2>
 <ul class= "option_group">
     <li class="option">${first}</li>
     <li class="option">${second}</li>
     <li class="option">${third}</li>
     <li class="option">${fourth}</li>
     </ul>
 `

 toggleActive();

}

function next(){
    if(question_count== questions.length - 1){
        location.href= "./end.html"
    }

    let user_answer = document.querySelector("li.option.active").innerHTML
    if(user_answer == questions[question_count].answer){
        points +=1
        sessionStorage.setItem("points",points)
    } else{
        points +=0
        sessionStorage.setItem("points", points)
    }

    question_count++
    show(question_count)
}

function toggleActive(){
    let option =document.querySelectorAll("li.option")
    for(let i=0; i<option.length;i++){
        option[i]. onclick = function(){
            for(let i=0;i<option.length;i++){
                if(option[i].classList.contains("active")){
                    option[i].classList.remove("active")
                }
            }
            option[i].classList.add("active")
        }
    }
}