import './Quiz.css';
import React from 'react';
import { useState} from "react";
var flag =  Boolean(false)
const questions =[
    {
    questionText: "Где была введена порода собак дог",//0
    answerOptions: [
        {answerText: "Германия",isCorrect:true},
        {answerText: "Шотландия",isCorrect: false},
        {answerText: "Англия", isCorrect: false},
        {answerText: "США", isCorrect: false}
    ]
}
]
export const Quiz = () =>{
const [currentQuestion, setCurrentQuestion]= useState(0)
const [score, setScore] = useState(0)
const handleAnswerOptionClick = (isCorrect)=>{
    
     if ((isCorrect)&&(currentQuestion == questions.length-1)&&(flag==false)){
        setScore(score+1)
        flag = true
     }
     else if ((isCorrect)&&(currentQuestion == questions.length-1)&&(flag == true)){
        setScore(score)
     }
     else if (isCorrect){
        setScore(score+1)
     }    
        setCurrentQuestion(currentQuestion+1)
    }      
return(
    <div>
        {currentQuestion< 1?
        <div className = "quiz"  > 
        <div className = 'question_section' >
            <div className="question_count">
                <span>Вопрос {currentQuestion +1}</span>/{questions.length}
            </div>
            <div className='question_text'>{questions[currentQuestion].questionText}</div>
        </div>
        <div className = "answer_section"> 
            {questions[currentQuestion].answerOptions.map(
                item => (<button className = "answer_button" onClick=
                {() => handleAnswerOptionClick(item.isCorrect)}>
                  {item.answerText}  
                </button>
               ))}
        
        </div>
        <div className = "score_section">  
        Правильных ответов {score} из {questions.length}
        </div></div>
        :

        <h1> Тест закончен, счет {score}</h1>}

        </div>
)
}
