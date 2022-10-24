'use strict';
// console.log(document.querySelector('.message'))
// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=13;
const number =Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;
const displayMessage=function(message){
    document.querySelector('.message').textContent=message;
}
document.querySelector('.check').addEventListener(
    'click',function(){
        const guess=Number(document.querySelector('.guess').value)
        console.log(guess);
        //when there is no input
        if(!guess){
            displayMessage('No number!😢');
        //when player wins
        }else if(guess===number){
            document.querySelector('.number').style.width='30rem';
            document.querySelector('.number').textContent=number
            displayMessage('Hurray, you won🎉');
            document.querySelector('body').style.backgroundColor='#60b347';
            if(highscore<score){
                highscore=score;
                document.querySelector('.highscore').textContent=highscore;
            }
            //when guess is not equal to number
        }else{
            if(score>1){
            displayMessage(guess>number?'Guess is incorrect🙁 try smaller number':'Guess is incorrect🙁 try bigger number');
            score=score-1;
            document.querySelector('.score').textContent=score
            }else{
                displayMessage('You lost');
                document.querySelector('.number').textContent=number
            }
      
        }
    }
);

document.querySelector('.again').addEventListener(
    'click',function(){
        score=20;
        const number =Math.trunc(Math.random()*20)+1;
        document.querySelector('.score').textContent=score
        displayMessage('Start Guessing..');     
        document.querySelector('.guess').value=''
        document.querySelector('.number').style.width='15rem';
        document.querySelector('.number').textContent='?'
        document.querySelector('body').style.backgroundColor='#222';
    }
)