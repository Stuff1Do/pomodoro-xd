

const startButton = document.querySelector('.start')
const timer = document.querySelector('.timer')
const reset = document.querySelector('.reset')
const mainTimer = document.querySelector('.pomodoro')
const shortBreak = document.querySelector('.short-break')
const longBreak = document.querySelector('.long-break')

let maxTimer = 1500;
let clickCtr = 0;
let timeInterval = null;
let actualTimer;

function calculateTimer(time){
    let timeInMinutes = Math.floor(time / 60);
    let timeInSeconds = time % 60;
    
    //format single digit numbers to be padded with 0 at the start
    let formattedMinutes = String(timeInMinutes).padStart(2, "0");
    let formattedSeconds = String(timeInSeconds).padStart(2, "0");

    actualTimer = `${formattedMinutes}:${formattedSeconds}`; 
}
function showTimer(){
    clickCtr++;
    
    if(clickCtr % 2== 0){
        startButton.textContent = "start"; 
        clearInterval(timeInterval); //stops the timer if the user clicks pause
    }else{
        startButton.textContent = "pause";
        timeInterval = setInterval(() =>{
                let time = --maxTimer;
                
                calculateTimer(time);
                
                timer.textContent = actualTimer;
                
                if(maxTimer < 0){
                    clearInterval(timeInterval);
                }
            }, 1000)
            
        }
        
 }
  

startButton.addEventListener('click', showTimer)

mainTimer.addEventListener('click', ()=>{
    timer.textContent = "25:00";
    clearInterval(timeInterval);
    stateColorController(mainTimer, shortBreak, longBreak)
})

shortBreak.addEventListener('click', ()=>{
    clearInterval(timeInterval);
    timer.textContent = "5:00";
    startButton.textContent ="start";
    stateColorController(shortBreak, mainTimer, longBreak)
})

longBreak.addEventListener('click', ()=>{
    clearInterval(timeInterval);
    timer.textContent = "10:00";
    startButton.textContent ="start";
    stateColorController(longBreak, mainTimer, shortBreak)
})

function stateColorController(currentTimer, timer1, timer2){
    currentTimer.style.background = "white";
    currentTimer.style.borderColor = "white";

    timer1.style.background = "transparent";
    timer1.style.borderColor = "black";

    timer2.style.background = "transparent";
    timer2.style.borderColor = "black";

}