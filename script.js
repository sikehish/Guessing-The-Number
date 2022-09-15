'use strict';

//SESSION 70 - PROJECT #1: Guess My Number!

//SESSION 71-What is DOM and DOM Manipulation
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction

//SESSION 72-SELECTING AND MANIPULATING DOM ELEMENTS
// https://www.w3schools.com/jsref/prop_text_value.asp
// VVI NOTE: .value only works for input/text fields i.e for input/form html elements,not for other stuff
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//SESSION 73 - Handling Click events
// https://javascriptweblog.wordpress.com/2011/02/07/truth-equality-and-javascript/
// https://stackoverflow.com/questions/5791158/javascript-what-is-the-difference-between-if-x-and-if-x-null
//NOTE:.addEventlistener is async web API,so hence if we mention the Correct Number line ioutside the addEventlistener, then that will run before we enter the value,as the addEventlistener would wait for our input and other lines of code get executed


// document.querySelector('.check').addEventListener('click',function()
// {
//     const guess=Number(document.querySelector('.guess').value);
//     //note:if we click without entering,the value would be blank string '' and hence when typecasted to Number,we get 0
// //we converted the input value to Number as the input html element by default store the entered value as string
//     console.log(guess, typeof(guess));

//     if(!guess)
//     {
//         document.querySelector('.message').innerText="No Number / 0 enetered";
//     }
//     // document.querySelector('.message').textContent = '🎉 Correct Number!';
// });
// document.querySelector('.message').textContent = '🎉 Correct Number!';

//SESSION 74 -Implementing the Game Logic

// const secretNum=parseInt((Math.random()*20))+1; 
// //same as Math.trunc((Math.random()*20)) +1 ->We add 1 so that we also get upto 20, otherwise random gives a number between 0 and 1. so multpilying 20 with it will give less than 20.so thats why
// console.log(secretNum);
// let score= Number(document.querySelector('.score').innerText);
// //Here we couldve set score to score=20 and then decremented it when the guess is wrong and then write it to the DOM,like how Jonas did,but we chose not to. The only difference is that instead of 20,we took the value 20 from the HTML doc. tHATS IT

// document.querySelector('.check').addEventListener('click',function()
// {
//     const guess=Number(document.querySelector('.guess').value);
//     //note:if we click without entering,the value would be blank string '' and hence when typecasted to Number,we get 0
// //we converted the input value to Number as the input html element by default store the entered value as string
//     console.log(guess, typeof(guess));

//     // VVI NOTE: .value only works for input/text fields i.e for input/form tags,not for other stuff thats why the below lines of code return undefined
//     // let score= document.querySelector('.score').value;
//     // console.log(score)

//     console.log(score, typeof(score))

//         if(!guess)
//     {
//         if(score>1)
//         {
//         document.querySelector('.message').innerText="No Number / 0 enetered";
//         score--;
//         document.querySelector('.score').textContent=score;
//         }
//         else 
//         {
//             document.querySelector('.score').innerText=0;
//             document.querySelector('.message').textContent="Game Over. Start Again";
//             document.body.style.backgroundColor="red"; 
//         }
//     }else if(guess===secretNum){
//         if(score>=1)
//         {
//             document.querySelector('.message').innerText="Correct Number";
//         document.body.style.backgroundColor="green";
//         document.querySelector('.number').style.width='30rem'; //'30rem' and not just 30rem
//         document.querySelector('.number').innerText=secretNum;
//         }
//         else 
//         {
//             document.querySelector('.score').innerText=0;
//             document.querySelector('.message').textContent="Game Over. Start Again";
//             document.body.style.backgroundColor="red";  
//         }
//     }else if(guess<=secretNum)
//     {
//         if(score>0)
//         {
//             document.querySelector('.message').textContent="Too low";
//             score--;
//             document.querySelector('.score').textContent=score;
//         }
//         else 
//         {
//             document.querySelector('.score').innerText=0;
//             document.querySelector('.message').textContent="Game Over. Start Again";
//             document.body.style.backgroundColor="red";
//         }
//     }
//     else if(guess>=secretNum)
//     {
//         if(score>0)
//         {
//         document.querySelector('.message').textContent="Too high";
//         score--;
//         document.querySelector('.score').textContent=score;
//         }
//         else 
//         {
//             document.querySelector('.score').innerText=0;
//             document.querySelector('.message').textContent="Game Over. Start Again";
//             document.body.style.backgroundColor="red";
//         }
//     }
    
// });

//SESSION 75 - Manipulating CSS Styles
//In the previus session,we implemented the game,the 3 thingswe didnt implement were again functionality,and high score, and making the score wider(in size). Also,we didnt follow DRY principle and so we need to create funcs for that. NOTE:I implememnted background color but Jonas didnt. So he teaches that here
// I made only one change that i changed the width when we won the Gamepad.so i didnt copy the code Headers. Just refer to session 74
// document.querySelector('.number').style.width='30rem'; //'30rem' and not just 30rem

//SESSION 76 -76. Coding Challenge #1
//Implement game reset functinality
// let secretNum=parseInt((Math.random()*20))+1; 
// console.log(secretNum);
// let score= Number(document.querySelector('.score').innerText);



// document.querySelector('.check').addEventListener('click',function()
// {
//     const guess=Number(document.querySelector('.guess').value);

//     console.log(guess, typeof(guess));

//     console.log(score, typeof(score))

//         if(!guess)
//     {
//         if(score>1)
//         {
//         document.querySelector('.message').innerText="No Number / 0 entered";
//         score--;
//         document.querySelector('.score').textContent=score;
//         }
//         else 
//         {
//             document.querySelector('.score').innerText=0;
//             document.querySelector('.message').textContent="Game Over. Start Again";
//             document.body.style.backgroundColor="red"; 
//         }
//     }else if(guess===secretNum){
//         if(score>=1)
//         {
//             document.querySelector('.message').innerText="Correct Number";
//         document.body.style.backgroundColor="green";
//         document.querySelector('.number').style.width='30rem'; //'30rem' and not just 30rem
//         document.querySelector('.number').innerText=secretNum;
//         }
//         else 
//         {
//             document.querySelector('.score').innerText=0;
//             document.querySelector('.message').textContent="Game Over. Start Again";
//             document.body.style.backgroundColor="red";  
//         }
//     }else if(guess<=secretNum)
//     {
//         if(score>0)
//         {
//             document.querySelector('.message').textContent="Too low";
//             score--;
//             document.querySelector('.score').textContent=score;
//         }
//         else 
//         {
//             document.querySelector('.score').innerText=0;
//             document.querySelector('.message').textContent="Game Over. Start Again";
//             document.body.style.backgroundColor="red";
//         }
//     }
//     else if(guess>=secretNum)
//     {
//         if(score>0)
//         {
//         document.querySelector('.message').textContent="Too high";
//         score--;
//         document.querySelector('.score').textContent=score;
//         }
//         else 
//         {
//             document.querySelector('.score').innerText=0;
//             document.querySelector('.message').textContent="Game Over. Start Again";
//             document.body.style.backgroundColor="red";
//         }
//     }
    
// });

// //Note:This works even if its below. Its asynchronous. SO WHEN YOU CALL THIS score gets set to 20 and a secret number is generated, and then when you click on check,this secret number would be considered,as its updated.
// document.querySelector('.again').addEventListener('click',function()
// {
//     document.querySelector('.message').innerText="Start guessing...";
//     score=20;
//     document.querySelector('.score').innerText=score;
//     document.body.style.backgroundColor="#222";
//     document.querySelector('.number').style.width='15rem';
//     document.querySelector('.number').innerText="?";
//     secretNum=parseInt((Math.random()*20))+1;
//     document.querySelector('.guess').value='';
//     console.log(secretNum);
// })

//SESSION 77 -Implementing Highscores
// let secretNum=parseInt((Math.random()*20))+1; 
// console.log(secretNum);
// let score= Number(document.querySelector('.score').innerText);
// let highscore=0;


// document.querySelector('.check').addEventListener('click',function()
// {
//     const guess=Number(document.querySelector('.guess').value);

//     console.log(guess, typeof(guess));

//     console.log(score, typeof(score))

//         if(!guess)
//     {
//         if(score>1)
//         {
//         document.querySelector('.message').innerText="No Number / 0 entered";
//         score--;
//         document.querySelector('.score').textContent=score;
//         }
//         else 
//         {
//             document.querySelector('.score').innerText=0;
//             document.querySelector('.message').textContent="Game Over. Start Again";
//             document.body.style.backgroundColor="red"; 
//         }
//     }else if(guess===secretNum){
//         if(score>=1)
//         {
//             document.querySelector('.message').innerText="Correct Number";
//         document.body.style.backgroundColor="green";
//         document.querySelector('.number').style.width='30rem'; //'30rem' and not just 30rem
//         document.querySelector('.number').innerText=secretNum;
//         if(score>highscore)
//         {
//             highscore=score;
//             document.querySelector('.highscore').innerText=highscore;
//         }
            
//         }
//         else 
//         {
//             document.querySelector('.score').innerText=0;
//             document.querySelector('.message').textContent="Game Over. Start Again";
//             document.body.style.backgroundColor="red";  
//         }
//     }else if(guess<=secretNum)
//     {
//         if(score>1)
//         {
//             document.querySelector('.message').textContent="Too low";
//             score--;
//             document.querySelector('.score').textContent=score;
//         }
//         else 
//         {
//             document.querySelector('.score').innerText=0;
//             document.querySelector('.message').textContent="Game Over. Start Again";
//             document.body.style.backgroundColor="red";
//         }
//     }
//     else if(guess>=secretNum)
//     {
//         if(score>1)
//         {
//         document.querySelector('.message').textContent="Too high";
//         score--;
//         document.querySelector('.score').textContent=score;
//         }
//         else 
//         {
//             document.querySelector('.score').innerText=0;
//             document.querySelector('.message').textContent="Game Over. Start Again";
//             document.body.style.backgroundColor="red";
//         }
//     }
    
// });

// document.querySelector('.again').addEventListener('click',function()
// {
//     document.querySelector('.message').innerText="Start guessing...";
//     score=20;
//     document.querySelector('.score').innerText=score;
//     document.body.style.backgroundColor="#222";
//     document.querySelector('.number').style.width='15rem';
//     document.querySelector('.number').innerText="?";
//     secretNum=parseInt((Math.random()*20))+1;
//     document.querySelector('.guess').value='';
//     console.log(secretNum);
// })


//SESSION 78 - Refacotring our code - The dry principle
//We just eliminate repetitive code by using functions or combining if statements. I havent done it because i think we can do it when required. But still i implement my one func here

function decisionMaking(message, sc)//sc=score,message=what we want to print
{
    if(sc>1)
        {
            document.querySelector('.message').textContent=message;
            document.querySelector('.score').textContent=sc;
        }
        else 
        {
            document.querySelector('.score').innerText=0;
            document.querySelector('.message').textContent="Game Over. Start Again";
            document.body.style.backgroundColor="red";
        }
 }
    

let secretNum=parseInt((Math.random()*20))+1; 
console.log(secretNum);
let score= Number(document.querySelector('.score').innerText);
let highscore=0;


document.querySelector('.check').addEventListener('click',function()
{
    console.log(this);
    const guess=Number(document.querySelector('.guess').value);

    console.log(guess, typeof(guess));

    console.log(score, typeof(score))

        if(!guess)
    {
        score--;
        decisionMaking("No Number / 0 entered", score)
    }
    else if(guess===secretNum){
        if(score>=1)
        {
            document.querySelector('.message').innerText="Correct Number";
        document.body.style.backgroundColor="green";
        document.querySelector('.number').style.width='30rem'; //'30rem' and not just 30rem
        document.querySelector('.number').innerText=secretNum;
        if(score>highscore)
        {
            highscore=score;
            document.querySelector('.highscore').innerText=highscore;
        }
            
        }
        else 
        {
            document.querySelector('.score').innerText=0;
            document.querySelector('.message').textContent="Game Over. Start Again";
            document.body.style.backgroundColor="red";  
        }
    }else if(guess<secretNum)
    {
        score--;
        decisionMaking("Too low",score);
    }
    else if(guess>secretNum)
    {
        score--;
        decisionMaking("Too high",score);
    }
    
});

document.querySelector('.again').addEventListener('click',function()
{
    document.querySelector('.message').innerText="Start guessing...";
    score=20;
    document.querySelector('.score').innerText=score;
    document.body.style.backgroundColor="#222";
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.number').innerText="?";
    secretNum=parseInt((Math.random()*20))+1;
    document.querySelector('.guess').value='';
    console.log(secretNum);
})



