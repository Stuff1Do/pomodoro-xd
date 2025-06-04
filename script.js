

const startButton = document.querySelector('.start')
const timer = document.querySelector('.timer')
const reset = document.querySelector('.reset')
const mainTimer = document.querySelector('.pomodoro')
const shortBreak = document.querySelector('.short-break')
const longBreak = document.querySelector('.long-break')
const resetContainer = document.querySelector('.reset-container')
const modal = document.querySelector('#modal');
const settingsContainer = document.querySelector('.settings-container')
const closeModal = document.querySelector('.close-modal')
const inputPomodoro = document.querySelector('#pomo-minutes');
const inputShortBreak = document.querySelector('#short-minutes')
const inputLongBreak = document.querySelector('#long-minutes');
const submit = document.querySelector('.save-changes');


const MAXIMUM_TIMER_DIGITS = 2;
const SECONDS_TO_MIN_FACTOR = 60;

let userInputPomodoro = inputPomodoro.value;
let userInputShortBreak = inputShortBreak.value;
let userInputLongBreak = inputLongBreak.value;

let userInputPomodoroSeconds = userInputPomodoro * 60;
let userInputShortBreakSeconds = userInputShortBreak * 60;
let userInputLongBreakSeconds = userInputLongBreak * 60;  
let pomodoroMinuteString = "25:00";
let shortBreakMinuteString = "5:00";
let longBreakMinuteString = "10:00";

let shortBreakSeconds = userInputShortBreakSeconds;
let longBreakSeconds = userInputLongBreakSeconds;
let pomodoroSeconds = userInputPomodoroSeconds;
let pomodoroMinutes = pomodoroMinuteString;
let shortBreakMinutes = shortBreakMinuteString;
let longBreakMinutes = longBreakMinuteString;
let maxTimer = pomodoroSeconds;
let clickCtr = 0;
let timeInterval = null;
let currentState = "main_timer";
timer.textContent = pomodoroMinutes;



function convertToString(num){
    
    return `${num}:00`;
}

submit.addEventListener('click', ()=>{
     userInputPomodoro = inputPomodoro.value;
     userInputShortBreak = inputShortBreak.value;
     userInputLongBreak = inputLongBreak.value;
    
    userInputPomodoroSeconds = userInputPomodoro * 60;
    userInputShortBreakSeconds = userInputShortBreak * 60;
    userInputLongBreakSeconds = userInputLongBreak * 60;  

    pomodoroMinuteString = convertToString(+userInputPomodoro);
    shortBreakMinuteString = convertToString(+userInputShortBreak);
    longBreakMinuteString = convertToString(+userInputLongBreak);

    pomodoroMinutes = pomodoroMinuteString;
    shortBreakMinutes =shortBreakMinuteString;
    longBreakMinutes = longBreakMinuteString;
    
    timer.textContent = pomodoroMinutes;
    maxTimer = userInputPomodoroSeconds;
    shortBreakSeconds = userInputShortBreakSeconds;
    longBreakSeconds = userInputLongBreakSeconds;
    modal.close();
})


function calculateTimer(time){
    let timeInMinutes = Math.floor(time / SECONDS_TO_MIN_FACTOR); 
    let timeInSeconds = time % SECONDS_TO_MIN_FACTOR;
    
    //format single digit numbers to be padded with 0 at the start
    let formattedMinutes = String(timeInMinutes).padStart(MAXIMUM_TIMER_DIGITS, "0");
    let formattedSeconds = String(timeInSeconds).padStart(MAXIMUM_TIMER_DIGITS, "0");

    return `${formattedMinutes}:${formattedSeconds}`; 
}

function stateTimer(e, minutes, seconds) {
    clearInterval(timeInterval);
    timer.textContent = minutes;        
    startButton.textContent ="start";
    maxTimer = seconds;
    clickCtr = 0; //resets clickctr so its odd when start button is clicked again
  }
function stateColorController(currentTimer, timer1, timer2){
    currentTimer.style.background = "white";
    currentTimer.style.borderColor = "white";

    timer1.style.background = "transparent";
    timer1.style.borderColor = "black";

    timer2.style.background = "transparent";
    timer2.style.borderColor = "black";

}

startButton.addEventListener('click', () =>{
    clickCtr++;
    console.log(clickCtr);
    //handles button behavior when the user clicks start and pause
    if(clickCtr % 2 == 0){ 
        startButton.textContent = "start"; 
        clearInterval(timeInterval); 
    }else {
        startButton.textContent = "pause";
        timeInterval = setInterval(() =>{
                let time = --maxTimer; //decrement each second
            
                let actualTimer= calculateTimer(time);
                
                timer.textContent = actualTimer;
                
                if(maxTimer < 0){
                    clearInterval(timeInterval);
                    maxTimer = 0;
                    timer.textContent = "00:00";
                }
            }, 1000)
            
        }
})
document.addEventListener('click', function(e) { //this is so i can pass the event e
    if (e.target.closest('.reset-container')) {
        if(currentState == "main_timer"){ 
            stateTimer(e, pomodoroMinutes, pomodoroSeconds);
        }else if(currentState == "short_break"){
            stateTimer(e, shortBreakMinutes, shortBreakSeconds);
        }else if(currentState == "long_break"){
            stateTimer(e, longBreakMinutes, longBreakSeconds)
        }
    }
});


document.addEventListener('click', (e)=>{
    if(e.target.closest('.settings-container')){
        modal.showModal();
        
    }
})

closeModal.addEventListener('click', ()=>{
    modal.close();
})


mainTimer.addEventListener('click', ()=>{
    //resets the timers already running and and shows the intended timer
    clearInterval(timeInterval);
    timer.textContent = pomodoroMinutes;
    startButton.textContent ="start";
    maxTimer = pomodoroSeconds;
    currentState = "main_timer"
    stateColorController(mainTimer, shortBreak, longBreak)
})

shortBreak.addEventListener('click', ()=>{
    clearInterval(timeInterval);
    timer.textContent = shortBreakMinutes;
    startButton.textContent ="start";
    maxTimer = shortBreakSeconds; 
    currentState ="short_break";
    stateColorController(shortBreak, mainTimer, longBreak)
})

longBreak.addEventListener('click', ()=>{
    clearInterval(timeInterval);
    timer.textContent = longBreakMinutes;
    startButton.textContent ="start";
    maxTimer = longBreakSeconds ;
    currentState = "long_break";
    stateColorController(longBreak, mainTimer, shortBreak)
})
