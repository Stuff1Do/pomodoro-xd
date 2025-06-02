

const startButton = document.querySelector('.start')
const timer = document.querySelector('.timer')
const reset = document.querySelector('.reset')
const mainTimer = document.querySelector('.pomodoro')
const shortBreak = document.querySelector('.short-break')
const longBreak = document.querySelector('.long-break');


let clickCtr = 0;
startButton.addEventListener('click', ()=>{
    clickCtr++;
    if(clickCtr % 2== 0){
        startButton.textContent = "start"; 
    }else{
        startButton.textContent = "pause";
    }
})

mainTimer.addEventListener('click', ()=>{
    timer.textContent = "25:00";
    stateColorController(mainTimer, shortBreak, longBreak)
})

shortBreak.addEventListener('click', ()=>{
    timer.textContent = "5:00";
    stateColorController(shortBreak, mainTimer, longBreak)
})

longBreak.addEventListener('click', e=>{
    timer.textContent = "10:00";
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