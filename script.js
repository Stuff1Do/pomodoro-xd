

const startButton = document.querySelector('.start')
const timer = document.querySelector('.timer')
const reset = document.querySelector('.reset')
const mainTimer = document.querySelector('.pomodoro')
const shortBreak = document.querySelector('.short-break')
const longBreak = document.querySelector('.long-break')

const MAXIMUM_TIMER_DIGITS = 2;
const SECONDS_TO_MIN_FACTOR = 60;
let shortBreaKSeconds = 300;
let longBreakSeconds = 500;
let pomodoroSeconds = 1500;
let pomodoroMinutes = "25:00";
let shortBreakMinutes = "5:00";
let longBreakMinutes = "10:00";
let maxTimer = pomodoroSeconds;
let clickCtr = 0;
let timeInterval = null;


function calculateTimer(time){
    let timeInMinutes = Math.floor(time / SECONDS_TO_MIN_FACTOR); 
    let timeInSeconds = time % SECONDS_TO_MIN_FACTOR;
    
    //format single digit numbers to be padded with 0 at the start
    let formattedMinutes = String(timeInMinutes).padStart(MAXIMUM_TIMER_DIGITS, "0");
    let formattedSeconds = String(timeInSeconds).padStart(MAXIMUM_TIMER_DIGITS, "0");

    return `${formattedMinutes}:${formattedSeconds}`; 
}

startButton.addEventListener('click', () =>{
    clickCtr++;
    
    //handles button behavior when the user clicks and clicks again
    if(clickCtr % 2== 0){ 
        startButton.textContent = "start"; 
        clearInterval(timeInterval); //stops the timer if the user clicks pause
    }else{
        startButton.textContent = "pause";
        timeInterval = setInterval(() =>{
                let time = --maxTimer;
                
                let actualTimer= calculateTimer(time);
                
                timer.textContent = actualTimer;
                
                if(maxTimer < 0){
                    clearInterval(timeInterval);
                }
            }, 1000)
            
        }
})

mainTimer.addEventListener('click', ()=>{
    clearInterval(timeInterval);
    timer.textContent = pomodoroMinutes;
    startButton.textContent ="start";
    maxTimer = pomodoroSeconds;
    stateColorController(mainTimer, shortBreak, longBreak)
})

shortBreak.addEventListener('click', ()=>{
    clearInterval(timeInterval);
    timer.textContent = shortBreakMinutes;
    startButton.textContent ="start";
    maxTimer = shortBreaKSeconds; 
    stateColorController(shortBreak, mainTimer, longBreak)
})

longBreak.addEventListener('click', ()=>{
    clearInterval(timeInterval);
    timer.textContent = longBreakMinutes;
    startButton.textContent ="start";
    maxTimer = longBreakSeconds ;
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