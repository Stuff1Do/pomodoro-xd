const startButton = document.querySelector('.start');
const timer = document.querySelector('.timer');
const reset = document.querySelector('.reset');
const mainTimer = document.querySelector('.pomodoro');
const shortBreak = document.querySelector('.short-break');
const longBreak = document.querySelector('.long-break');
const resetContainer = document.querySelector('.reset-container');
const modal = document.querySelector('#modal');
const settingsContainer = document.querySelector('.settings-container');
const closeModal = document.querySelector('.close-modal');
const inputPomodoro = document.querySelector('#pomo-minutes');
const inputShortBreak = document.querySelector('#short-minutes');
const inputLongBreak = document.querySelector('#long-minutes');
const submit = document.querySelector('.save-changes');
const alertInvalid = document.querySelector('.invalid-input');
const resetAll = document.querySelector('.reset-all');
const closeMark = document.querySelector('.close-modal-mark');
const timerSettings = document.querySelector('.timer-settings');
const displaySettings = document.querySelector('.display-settings');
const optionSettings =  document.querySelector('.option-settings');
const timerPage = document.querySelector('.timer-page');
const displayPage = document.querySelector('.display-page');
const optionPage = document.querySelector('.option-page');
const inputBackground = document.querySelector('#bg-options');
const inputSound = document.querySelector('#sound-options');
const checkPomo = document.querySelector('#checkpomo');
const checkAudio = document.querySelector('#checksound');
const footer = document.querySelector('.footer');

const MAXIMUM_TIMER_DIGITS = 2;
const CONVERSION_FACTOR = 60;

const defaultPomodoroSeconds = 1500;
const defaultShortBreakSeconds = 300;
const defaultLongBreakSeconds = 600;
const defaultPomodoroString = "25:00"
const defaultShortBreakString = "5:00";
const defaultLongBreakString = "10:00";
const defaultInputFieldPomodoro = 25;
const defaultInputFieldShort = 5;
const defaultInputFieldLong = 10;
const defaultBackgroundImage = 'ghibli';
const defaultSound = 'bellsound';
const startString = "start";
const pauseString = "pause";
const stateMainTimer = "main_timer";
const stateShortBreak = "short_break";
const stateLongBreak = "long_break";
const whiteButton = "white";
const transButton = "transparent";

let userInputPomodoro = inputPomodoro.value;
let userInputShortBreak = inputShortBreak.value;
let userInputLongBreak = inputLongBreak.value;
let userInputBackground = inputBackground.value;
let userInputSound = inputSound.value;
let isCheckedAudio = checkAudio.checked;
let isCheckedPomo = checkPomo.checked;


let userInputPomodoroSeconds = userInputPomodoro * 60;
let userInputShortBreakSeconds = userInputShortBreak * 60;
let userInputLongBreakSeconds = userInputLongBreak * 60;  
let pomodoroMinuteString = defaultPomodoroString;
let shortBreakMinuteString = defaultShortBreakString;
let longBreakMinuteString = defaultLongBreakString;

let shortBreakSeconds = userInputShortBreakSeconds;
let longBreakSeconds = userInputLongBreakSeconds;
let pomodoroSeconds = userInputPomodoroSeconds;
let maxTimer = userInputPomodoroSeconds;

let pomodoroMinutes = pomodoroMinuteString;
let shortBreakMinutes = shortBreakMinuteString;
let longBreakMinutes = longBreakMinuteString;

let clickCtr = 0;
let timeInterval = null;
let currentState = "main_timer";
timer.textContent = pomodoroMinutes;

let inputFieldPomo = defaultInputFieldPomodoro;
let inputFieldShort = defaultInputFieldShort;
let inputFieldLong = defaultInputFieldLong;
let inputSelectBackground = defaultBackgroundImage;
let inputSelectSound = defaultSound;


function convertToString(num){    
    return `${num}:00`;
}
displayPage.style.display = 'none';
optionPage.style.display = 'none';
timerSettings.addEventListener('click', ()=>{
    timerPage.style.display = 'flex';
    displayPage.style.display = 'none';
    optionPage.style.display = 'none';
    timerSettings.style.textDecoration = 'underline';
    displaySettings.style.textDecoration = 'none';
    optionSettings.style.textDecoration = 'none';
})

displaySettings.addEventListener('click', ()=>{
    timerPage.style.display = 'none';
    optionPage.style.display = 'none';
    displayPage.style.display = 'flex';
    timerSettings.style.textDecoration = 'none';
    displaySettings.style.textDecoration = 'underline';
    optionSettings.style.textDecoration = 'none';
})

optionSettings.addEventListener('click', ()=>{
    timerPage.style.display = 'none';
    optionPage.style.display = 'flex';
    displayPage.style.display = 'none';
    timerSettings.style.textDecoration = 'none';
    displaySettings.style.textDecoration = 'none';
    optionSettings.style.textDecoration = 'underline';
})


submit.addEventListener('click', ()=>{
    if(!inputPomodoro.value || !inputShortBreak.value || !inputLongBreak.value || inputPomodoro.value == 0 || 
        inputShortBreak.value < 1 || inputLongBreak.value  < 1 ){
        alertInvalid.textContent = "invalid!"
        alertInvalid.style.color = "red";
    }else{
        userInputPomodoro = inputPomodoro.value;
        userInputShortBreak = inputShortBreak.value;
        userInputLongBreak = inputLongBreak.value;
        userInputBackground = inputBackground.value;
    
        userInputPomodoroSeconds = userInputPomodoro * 60;
        userInputShortBreakSeconds = userInputShortBreak * 60;
        userInputLongBreakSeconds = userInputLongBreak * 60;  

        pomodoroMinuteString =  (function(){
            if (userInputPomodoro > 60) {
                return calculateTimer(userInputPomodoroSeconds);
            } else {
                return convertToString(+userInputPomodoro);
            }
        })();
        
        shortBreakMinuteString = (function(){
            if (userInputShortBreak > 60) {
                return calculateTimer(userInputShortBreakSeconds);
            } else {
                return convertToString(+userInputShortBreak);
            }
        })();
        
        longBreakMinuteString = (function(){
            if (userInputLongBreak > 60) {
                return calculateTimer(userInputLongBreakSeconds);
            } else {
                return convertToString(+userInputLongBreak);
            }
        })();

        pomodoroMinutes = pomodoroMinuteString;
        shortBreakMinutes = shortBreakMinuteString;
        longBreakMinutes = longBreakMinuteString;

        if(currentState == "main_timer"){ 
            stateTimer(pomodoroMinutes, userInputPomodoroSeconds);
            maxTimer = userInputPomodoroSeconds;
        }else if(currentState == "short_break"){
            stateTimer(shortBreakMinutes, userInputShortBreakSeconds);
            maxTimer = userInputShortBreakSeconds;
        }else if(currentState == "long_break"){
            stateTimer(longBreakMinutes, userInputLongBreakSeconds);
            maxTimer = userInputLongBreakSeconds;       
        }
        
        shortBreakSeconds = userInputShortBreakSeconds;
        longBreakSeconds = userInputLongBreakSeconds;
        
        inputFieldPomo = userInputPomodoro;
        inputFieldShort = userInputShortBreak;
        inputFieldLong = userInputLongBreak;
        userInputSound = inputSound.value;
        inputSelectSound = userInputSound;
        alertInvalid.textContent = '';

        modal.close();
    }

     
})
inputBackground.addEventListener('change', ()=>{
    userInputBackground = inputBackground.value;
    inputSelectBackground = userInputBackground;
    document.body.style.backgroundImage = `url(./images/${userInputBackground}.jpg)`;
});

resetAll.addEventListener('click', ()=>{
    shortBreakSeconds = defaultShortBreakSeconds;
    longBreakSeconds = defaultLongBreakSeconds;
    pomodoroSeconds = defaultPomodoroSeconds;
    maxTimer = defaultPomodoroSeconds;

    pomodoroMinutes = defaultPomodoroString;
    shortBreakMinutes = defaultShortBreakString;
    longBreakMinutes = defaultLongBreakString;
    inputBackground.value = defaultBackgroundImage  ;   
    userInputBackground = defaultBackgroundImage;
    inputSelectBackground = userInputBackground;
    
    document.body.style.backgroundImage = `url(./images/${userInputBackground}.jpg)`;

    inputPomodoro.value = 25;
    inputShortBreak.value = 5;
    inputLongBreak.value = 10;
    
})

closeModal.addEventListener('click', ()=>{
    inputPomodoro.value = inputFieldPomo;
    inputShortBreak.value = inputFieldShort;
    inputLongBreak.value = inputFieldLong;  
    inputSound.value = inputSelectSound;


    modal.close();
})
closeMark.addEventListener('click', ()=>{
    inputPomodoro.value = inputFieldPomo;
    inputShortBreak.value = inputFieldShort;
    inputLongBreak.value = inputFieldLong;
    inputSound.value = inputSelectSound;


    modal.close();
})
function calculateTimer(time){
    let totalMinutes = Math.floor(time / CONVERSION_FACTOR);
    let timeInMinutes = totalMinutes % CONVERSION_FACTOR;
    let timeInHours = Math.floor(totalMinutes/ CONVERSION_FACTOR);
    let timeInSeconds = time % CONVERSION_FACTOR;
    
    //format single digit numbers to be padded with 0 at the start
    let formattedMinutes = String(timeInMinutes).padStart(MAXIMUM_TIMER_DIGITS, "0");
    let formattedSeconds = String(timeInSeconds).padStart(MAXIMUM_TIMER_DIGITS, "0");
    

    if(!timeInHours || timeInHours === 0){
        return `${formattedMinutes}:${formattedSeconds}`;
    }else{
        return `${timeInHours}:${formattedMinutes}:${formattedSeconds}`; 
    }

}


function stateColorController(currentTimer, timer1, timer2){
    currentTimer.style.background = "white";
    currentTimer.style.borderColor = "white";
    currentTimer.style.color = "black";

    timer1.style.background = "transparent";
    timer1.style.borderColor = "white";

    timer2.style.background = "transparent";
    timer2.style.borderColor = "white";

}

 

function playMusic(sound){
    let audio = new Audio(`./sounds/${sound}.wav`);
    audio.play();
    
    setTimeout(() => {
        audio.pause();
        audio.currentTime = 0; 
      }, 10000); 
}
let checkPomoCtr = 0;
checkPomo.addEventListener('click', ()=>{
    checkPomoCtr++;
    if(checkPomoCtr % 2 == 0){ 
        isCheckedPomo = true;
        checkPomoCtr = 0;
    }else{
        isCheckedPomo = false;
    }
    
})

let checkAudioCtr = 0;
checkAudio.addEventListener('click', ()=>{
    checkAudioCtr++;
    if(checkAudioCtr % 2 == 0){
        isCheckedAudio = false;
        checkAudioCtr = 0;
        
    }
    else{
        isCheckedAudio = true;
        

    }
    
})

function startCurrentTimer(minutes, buttonstring, seconds, color, nowstate){
    timer.textContent = minutes;
    startButton.textContent = buttonstring;
    startButton.style.background = color;
    maxTimer = seconds;
    currentState = nowstate;
}


let pomoCtr = 0;
let mainTimerClicked = true;


startButton.addEventListener('click', () =>{
    clickCtr++;
    //handles button behavior when the user clicks start and pause
    if(clickCtr % 2 == 0){ 
        startButton.textContent = startString; 
        startButton.style.backgroundColor = whiteButton;
        clearInterval(timeInterval); 
    }else {
        startButton.textContent = pauseString;
        startButton.style.backgroundColor = transButton;
        timeInterval = setInterval(() =>{
                let time = --maxTimer; //decrement each second

                let actualTimer= calculateTimer(time);
                
                timer.textContent = actualTimer;
                document.title = `${actualTimer} | studyxd`;
                if(maxTimer < 0){
                    if(mainTimerClicked){
                        pomoCtr++;
                    }
                    if(pomoCtr > 0){
                        footer.textContent = `Pomodoros Completed: ${pomoCtr}!`;
                    }
                    console.log(pomoCtr);
                    clearInterval(timeInterval);
                    maxTimer = 0;
                    document.title =  `studyxd`;
                    
                    if(isCheckedAudio){
                        playMusic(userInputSound);
                    }

                    if(isCheckedPomo){     
                                                                     
                        if(pomoCtr >= 4 && pomoCtr % 4 == 0){
                            longBreak.click();
                            startCurrentTimer(longBreakMinutes, startString, userInputLongBreakSeconds, whiteButton, stateLongBreak);
                            clickCtr = 0;
                            pomoCtr = 0;
                            mainTimerClicked = false;
                            
                        }else if(mainTimerClicked){
                            shortBreak.click();
                            startCurrentTimer(shortBreakMinutes, startString, userInputShortBreakSeconds, whiteButton, stateShortBreak);
                            clickCtr = 0;
                            mainTimerClicked = false;
                            console.log(mainTimerClicked);

                        }else if(!mainTimerClicked){
                            mainTimer.click();
                            startCurrentTimer(pomodoroMinutes, startString, userInputPomodoroSeconds, whiteButton, stateMainTimer);
                            mainTimerClicked = true; 
                            clickCtr = 0;
                        }               
                       
                            
                        
                    }else{
                        
                        timer.textContent=`0:00`;
                        startButton.textContent = startString;
                        startButton.style.backgroundColor = whiteButton;
                        clickCtr = 0;
                    }
                   
                    
                    
                }
            }, 1000)
            
        }
})
document.addEventListener('click', function(e) { //this is so i can pass the event e
    if (e.target.closest('.reset-container')) {
        if(currentState == "main_timer"){ 
            stateTimer(pomodoroMinutes, userInputPomodoroSeconds);
        }else if(currentState == "short_break"){
            stateTimer(shortBreakMinutes, userInputShortBreakSeconds);
        }else if(currentState == "long_break"){
            stateTimer(longBreakMinutes, userInputLongBreakSeconds);
        }
        resetContainer.classList.remove('rotate');
        void resetContainer.offsetWidth;           
        resetContainer.classList.add('rotate');   
    }
});
function stateTimer(minutes, seconds) {
    clearInterval(timeInterval);
    timer.textContent = minutes;        
    startButton.textContent = startString;
    startButton.style.backgroundColor = whiteButton;
    maxTimer = seconds;
    clickCtr = 0; //resets clickctr so its odd when start button is clicked again
}

document.addEventListener('click', (e)=>{
    if(e.target.closest('.settings-container')){
        modal.showModal();
        
    }
})

mainTimer.addEventListener('click', () => {
    mainTimerClicked = true;
    clearInterval(timeInterval);
    startCurrentTimer(pomodoroMinutes, startString, userInputPomodoroSeconds, whiteButton, stateMainTimer);
    stateColorController(mainTimer, shortBreak, longBreak);
});

shortBreak.addEventListener('click', ()=>{
    mainTimerClicked = false;
    clearInterval(timeInterval);
    startCurrentTimer(shortBreakMinutes, startString, userInputShortBreakSeconds,whiteButton, stateShortBreak);
    stateColorController(shortBreak, mainTimer, longBreak);
    
});
                                                      
   

longBreak.addEventListener('click', ()=>{
    mainTimerClicked = false;
    clearInterval(timeInterval);
    startCurrentTimer(longBreakMinutes, startString, userInputLongBreakSeconds, whiteButton, stateLongBreak);
    stateColorController(longBreak, mainTimer, shortBreak);
});

