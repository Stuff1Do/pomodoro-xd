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
const alertInvalid = document.querySelector('.show-invalid');
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
const invalidSave = document.querySelector('.invalid-save');
const taskContainer  = document.querySelector('.taskbar-container');
const headerTaskbar = document.querySelector('.header-taskbar');
const addTaskContainer = document.querySelector('.add-task-container');
const inputArea = document.querySelector('#input-area');
const minimizeButton = document.querySelector('.minimize-button');
const listContainer = document.querySelector('.list-task');
const listHolder = document.querySelector('.todo-task');
const expandButton = document.querySelector('.expand-button');
const addTask = document.querySelector('.add-task');
const garbageIcon = document.querySelector('.garbage');
const taskBarLabel = document.querySelector('.to-do-label');
const inputPhoneBackground = document.querySelector('.phone-bg-options');
const pipButton = document.querySelector('.pip-button');
const minimizeContentButton = document.querySelector('.minimize-content');
const content = document.querySelector('.content');
const stateButtons = document.querySelector('.options');
const activityLeft = document.querySelector('.activity-left');
const activityRight = document.querySelector('.activity-right');
const flexContainer  = document.querySelector('.flex-container');
const musicButton = document.querySelector('.music-button');
const musicButtonContainer = document.querySelector('.footer-left-page');
const musicContainer = document.querySelector('.music-container');
const closeMusic = document.querySelector('.close-music');
const lightRain = document.querySelector('.light-rain');
const fireplace = document.querySelector('.fireplace'); 
const whiteNoise = document.querySelector('.white-noise');
const ocean = document.querySelector('.ocean');
const library = document.querySelector('.library');
const pinkNoise = document.querySelector('.pink-noise');
const brownNoise = document.querySelector('.brown-noise');
const heavyRain =document.querySelector('.heavy-rain');
const airConditioner = document.querySelector('.air-conditioner');
const rainSlider = document.querySelector('.rain-slider');
const fireSlider = document.querySelector('.fire-slider');
const whiteSlider = document.querySelector('.white-slider');
const oceanSlider = document.querySelector('.ocean-slider');
const librarySlider = document.querySelector('.library-slider');
const pinkSlider = document.querySelector('.pink-slider');
const brownSlider = document.querySelector('.brown-slider');
const heavyRainSlider = document.querySelector('.heavy-rain-slider');
const conditionerSlider = document.querySelector('.conditioner-slider');
const lightRainContainer = document.querySelector('.light');
const fireContainer = document.querySelector('.fire');
const whiteContainer = document.querySelector('.white');
const oceanContainer = document.querySelector('.water');
const libraryContainer = document.querySelector('.book');
const pinkContainer = document.querySelector('.pink');
const brownContainer = document.querySelector('.brown');
const heavyRainContainer = document.querySelector('.heavy');
const airContainer  = document.querySelector('.air');

musicContainer.style.width = '0';

rainSlider.style.display = 'none';
fireSlider.style.display = 'none';
whiteSlider.style.display = 'none';
oceanSlider.style.display = 'none';
librarySlider.style.display = 'none';
pinkSlider.style.display = 'none';
brownSlider.style.display = 'none';
heavyRainSlider.style.display = 'none';
conditionerSlider.style.display = 'none';


musicButton.addEventListener('click', ()=>{
    musicContainer.style.width = '350px';
    musicButtonContainer.style.display = 'none';
})

closeMusic.addEventListener('click', ()=>{
    musicContainer.style.width = '0';
    musicButtonContainer.style.display = 'block';
})

const rain = new Audio('./sounds/lightrain.mp3');
const fire = new Audio('./sounds/fireplace.mp3');
const pink = new Audio('./sounds/pinknoise.mp3');
const white = new Audio('./sounds/whitenoise.mp3');
const water = new Audio('./sounds/waterfall.mp3');
const brown = new Audio('./sounds/brownnoise.mp3');
const book = new Audio('./sounds/library.mp3');
const heavy = new Audio('./sounds/heavyrain.mp3');
const air  = new Audio('./sounds/conditioner.mp3');

function playAudio(sound){
    sound.loop = true;
    sound.play();
}

function pauseAudio(sound){
    sound.pause();
}

function setVolume(sound, value){
    sound.volume = value;
}

let rainClicked =false;
lightRain.addEventListener('click', ()=>{
    if(rainClicked){
        helperOpacityDisplay(lightRainContainer, rainSlider, '0.4', 'none');
        pauseAudio(rain);
        rainClicked = false;
        
    }else{
        helperOpacityDisplay(lightRainContainer, rainSlider, '1', '');
        playAudio(rain);
        rainSlider.addEventListener('change', ()=>{
            let lightRainVolume = rainSlider.value;
            setVolume(rain, lightRainVolume);
            
        })
        rainClicked = true;
    }
})


let fireClicked =false;
fireplace.addEventListener('click', ()=>{
    if(fireClicked){
        helperOpacityDisplay(fireContainer, fireSlider, '0.4', 'none');
        pauseAudio(fire);
        fireClicked = false;
    }else{
        helperOpacityDisplay(fireContainer, fireSlider, '1', '');
        playAudio(fire);
        fireSlider.addEventListener('change', ()=>{
            let fireVolume = fireSlider.value;
            setVolume(fire, fireVolume);
            
        })
        fireClicked = true;
    }
   
})


let whiteClicked =false;
whiteNoise.addEventListener('click', ()=>{
    if(whiteClicked){
        helperOpacityDisplay(whiteContainer, whiteSlider, '0.4', 'none');
        pauseAudio(white);
       whiteClicked = false;
    }else{
        helperOpacityDisplay(whiteContainer, whiteSlider, '1', '');
        playAudio(white);
        whiteSlider.addEventListener('change', ()=>{
            let whiteVolume = whiteSlider.value;
            setVolume(white, whiteVolume);
            
        })
        whiteClicked = true;
    }
   
})

let libraryClicked = false;
library.addEventListener('click', ()=>{
    if(libraryClicked){
        helperOpacityDisplay(libraryContainer, librarySlider, '0.4', 'none');
        pauseAudio(book);
        libraryClicked = false;
       
    }else{
        helperOpacityDisplay(libraryContainer, librarySlider, '1', '');
        playAudio(book);
        librarySlider.addEventListener('change', ()=>{
            let bookVolume = librarySlider.value;
            setVolume(book, bookVolume);
            
        })
        libraryClicked = true;
    }
   
})

let oceanClicked = false;
ocean.addEventListener('click', ()=>{
    if(oceanClicked){
        helperOpacityDisplay(oceanContainer, oceanSlider, '0.4', 'none');
        pauseAudio(water);
        oceanClicked = false;
    }else{
        helperOpacityDisplay(oceanContainer, oceanSlider, '1', '');
        playAudio(water);
        oceanSlider.addEventListener('change', ()=>{
            let waterVolume = oceanSlider.value;
            setVolume(water, waterVolume);
            
        })
        oceanClicked = true;
    }
   
})


let pinkClicked = false;
pinkNoise.addEventListener('click', ()=>{
    if(pinkClicked){
        helperOpacityDisplay(pinkContainer, pinkSlider, '0.4', 'none');
        pauseAudio(pink);
        pinkClicked = false;
    }else{
        helperOpacityDisplay(pinkContainer, pinkSlider, '1', '');
        playAudio(pink);
        pinkSlider.addEventListener('change', ()=>{
            let pinkVolume = pinkSlider.value;
            setVolume(pink, pinkVolume);

            
        })
        pinkClicked = true;
    }
   
})

let brownClicked = false;
brownNoise.addEventListener('click', ()=>{
    if(brownClicked){
        helperOpacityDisplay(brownContainer, brownSlider, '0.4', 'none');
        pauseAudio(brown);
        brownClicked = false;
    }else{
        helperOpacityDisplay(brownContainer, brownSlider, '1', '');
        playAudio(brown);
        brownSlider.addEventListener('change', ()=>{
            let brownVolume = brownSlider.value;
            setVolume(brown, brownVolume);

            
        })
        brownClicked = true;
    }
   
})

let heavyClicked = false;
heavyRain.addEventListener('click', ()=>{
    
    if(heavyClicked){
        helperOpacityDisplay(heavyRainContainer, heavyRainSlider, '0.4', 'none');
        pauseAudio(heavy);
        heavyClicked = false;
    }else{
        helperOpacityDisplay(heavyRainContainer, heavyRainSlider, '1', '');
        playAudio(heavy);
        heavyRainSlider.addEventListener('change', ()=>{
            let heavyVolume = heavyRainSlider.value;
            setVolume(heavy, heavyVolume);

            
        })
        heavyClicked = true;
    }
   
})


let conditionerClicked = false;
airConditioner.addEventListener('click', ()=>{
    if(conditionerClicked){
        helperOpacityDisplay(airContainer, conditionerSlider, '0.4', 'none');
        pauseAudio(air);
        conditionerClicked = false;
    }else{
        helperOpacityDisplay(airContainer, conditionerSlider, '1', '');
        playAudio(air);
        conditionerSlider.addEventListener('change', ()=>{
            let airVolume = conditionerSlider.value;
            setVolume(air, airVolume);
        })
        conditionerClicked = true;
    }
   
})



function helperOpacityDisplay(noise, slider, opacity, display){
    noise.style.opacity = opacity;
    slider.style.display = display;
}
pipButton.addEventListener('click', async()=>{  
    if(minimized){
        return;     
    }
    const pipWindow = await documentPictureInPicture.requestWindow();

    [...document.styleSheets].forEach((styleSheet) => {
        try {
          const cssRules = [...styleSheet.cssRules].map((rule) => rule.cssText).join('');
          const style = document.createElement('style');
    
          style.textContent = cssRules;
          pipWindow.document.head.appendChild(style);
        } catch (e) {
          const link = document.createElement('link');
    
          link.rel = 'stylesheet';
          link.type = styleSheet.type;
          link.media = styleSheet.media;
          link.href = styleSheet.href;
          pipWindow.document.head.appendChild(link);
        }
      });

    pipWindow.document.body.append(content);    

    pipWindow.addEventListener("pagehide", (event) => {
        const playerContainer = document.querySelector(".flex-container");
        const pipPlayer = event.target.querySelector(".content");
        playerContainer.append(pipPlayer);
      });
})


minimizeButton.addEventListener('click', ()=>{
    addTaskContainer.style.display = 'none';
    listContainer.style.display = 'none';
    taskContainer.style.minWidth = '150px';
    taskContainer.style.minHeight = '5px';
    taskContainer.style.maxWidth = '10px';
    taskContainer.style.maxHeight = '15px'
    taskBarLabel.style.fontSize = '14px';
    taskContainer.style.resize = 'none';
    taskContainer.style.overflow = 'hidden';
    
});
let expandFunctionality = function(){
    addTaskContainer.style.display = '';
    listContainer.style.display = '';
    taskBarLabel.style.fontSize = '12px';
    taskContainer.style.minHeight = '115px';
    taskContainer.style.minWidth = '196px';
    taskContainer.style.maxWidth = '362px';
    taskContainer.style.maxHeight = '500px';
    taskContainer.style.resize = 'both';
    taskContainer.style.overflowY = 'auto';
    taskContainer.style.overflowX = 'hidden';

}
expandButton.addEventListener('click', expandFunctionality);
addTask.addEventListener('click', ()=>{
    if(inputArea.value === ''){
        inputArea.focus();
        return;
    }else{
        const list = document.createElement('li');
        const span = document.createElement('span');
        const icon = document.createElement('i');
        const div = document.createElement('div');
        
        list.classList.add('list');
        icon.classList.add('fa-solid', 'fa-trash-can');
        div.classList.add('garbage');
        span.textContent = inputArea.value;
        list.appendChild(span);
        div.appendChild(icon);
        list.appendChild(div);
        listHolder.appendChild(list);
        inputArea.value = '';
        console.log(span);
        div.addEventListener('click', ()=>{
            listHolder.removeChild(list);
        });
        list.addEventListener('click', ()=>{
            span.style.textDecoration = 'line-through';
        })
        list.style.minWidth = '167px';
        list.style.maxWidth = '362px';
        expandButton.removeEventListener('click', expandFunctionality);
        expandButton.addEventListener('click', expandFunctionality);
    }
})

inputArea.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter' && !e.shiftKey){
        e.preventDefault();
        addTask.click();
    }
});

let minimized = false;
let displayState = null;
minimizeContentButton.addEventListener('click', ()=>{
    
    if(minimized){
       
        stateButtons.removeChild(displayState); 
        content.style.maxWidth = '';
        content.style.background = '';
        content.style.backdropFilter = '';
        content.style.padding = '';
        content.style.borderRadius = '';  
        minimizeContentButton.style.fontSize = '';
        activityLeft.style.width = '';  
        activityRight.style.width = '';
        resetContainer.style.marginLeft = '';
        resetContainer.style.fontSize = ''; 
        resetContainer.style.gap = '';
        resetContainer.style.padding = '';   
        mainTimer.style.display = '';    
        shortBreak.style.display = '';
        longBreak.style.display = '';    
        settingsContainer.style.display = '';
        startButton.style.fontSize = '';
        startButton.style.padding = ''; 
        startButton.style.width = '';
        timer.style.fontSize = '';
        content.style.minHeight = '';
        content.style.marginRight = '';
        content.style.marginTop = '';
        content.style.flex = '';
        flexContainer.style.justifyContent = '';
        flexContainer.style.alignItems = '';
        minimized = false;

    }else{    
        displayState = document.createElement('div');
        displayState.style.color = 'white'; 

        if(currentState === stateMainTimer){
            displayState.textContent = 'Focus';
        }else if(currentState == stateShortBreak){
            displayState.textContent = 'Short Break';
        }else{
            displayState.textContent = 'Long Break';
        }
        stateButtons.appendChild(displayState); 

        content.style.maxWidth = '200px';
        content.style.background = 'rgba(0,0,0,.3)';
        content.style.backdropFilter = 'blur(7px)';
        content.style.padding = '1rem 2rem';
        content.style.borderRadius = '18px';  
        minimizeContentButton.style.fontSize = '12px';
        activityLeft.style.width = '27px';  
        activityRight.style.width = '27px';
        resetContainer.style.marginLeft = '-5px';
        resetContainer.style.fontSize = '27px'; 
        resetContainer.style.gap = '12px';
        resetContainer.style.padding = '0px';   
        mainTimer.style.display = 'none';    
        shortBreak.style.display = 'none';
        longBreak.style.display = 'none';    
        settingsContainer.style.display = 'none';
        startButton.style.fontSize = '1.2rem';
        startButton.style.padding = '8px 15px'; 
        startButton.style.width = '85px';
        timer.style.fontSize = '4.25rem';
        content.style.minHeight = '100px';
        content.style.marginRight = '5px';
        content.style.marginTop = '5px';
        content.style.flex = '0';
        flexContainer.style.justifyContent = 'flex-end';
        flexContainer.style.alignItems = 'flex-start';
        minimized = true;
    }
})

let offsetX;
let offsetY;

const move = (e) =>{  
  const containerRect = taskContainer.getBoundingClientRect();
  const parentWidth = window.innerWidth;
  const parentHeight = window.innerHeight;
  const x = e.clientX - offsetX;
  const y = e.clientY - offsetY;
  if(x < -20) x = 0;
  if(y < -20) y = 0;
  const maxX = parentWidth - containerRect.width;
  const maxY = parentHeight - containerRect.height;

  if(x > maxX+30) x = maxX;
  if(y > maxY+30) y = maxY;
  taskContainer.style.left = `${x}px`;
  taskContainer.style.top = `${y}px`;
}


taskBarLabel.addEventListener('mousedown',(e)=>{
    e.preventDefault();
    offsetX = e.clientX - taskContainer.offsetLeft;
    offsetY = e.clientY - taskContainer.offsetTop;
    document.addEventListener('mousemove', move);
});


document.addEventListener('mouseup', ()=>{
    document.removeEventListener('mousemove', move);
});

modal.style.display = 'none';
alertInvalid.style.display = 'none';
invalidSave.style.margin = '0';
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
const defaultPhoneBackground = 'none';
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
let userInputPhoneBackground = inputPhoneBackground.value;
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
let inputSelectPhoneBackground = defaultPhoneBackground;
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
        inputShortBreak.value < 1 || inputLongBreak.value  < 1 || inputPomodoro.value % 1 != 0  ||  inputShortBreak.value % 1 != 0 
        ||  inputLongBreak.value % 1 != 0 || inputPomodoro.value > 300  ||  inputShortBreak.value > 300
        ||  inputLongBreak.value > 300){
        alertInvalid.style.display = 'block';
        alertInvalid.textContent = "invalid!"
        alertInvalid.style.color = "red";
        
    }else{
        userInputPomodoro = inputPomodoro.value;
        userInputShortBreak = inputShortBreak.value;
        userInputLongBreak = inputLongBreak.value;
        userInputBackground = inputBackground.value;
        userInputPhoneBackground = inputPhoneBackground.value;
    
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
        modal.style.display = 'none';
    }

     
})
inputBackground.addEventListener('change', ()=>{
    userInputBackground = inputBackground.value;
    inputSelectBackground = userInputBackground;
    document.body.style.backgroundImage = `url(./images/${userInputBackground}.jpg)`;
});

inputPhoneBackground.addEventListener('change', ()=>{
    userInputPhoneBackground = inputPhoneBackground.value;
    inputSelectPhoneBackground = userInputPhoneBackground;
    if(userInputPhoneBackground === 'none'){
        document.body.style.backgroundImage = `url(./images/${userInputBackground}.jpg)`;
    }else{
        document.body.style.backgroundImage = `url(./images/${userInputPhoneBackground}.jpg)`;
    }
    
})


resetAll.addEventListener('click', ()=>{
    shortBreakSeconds = defaultShortBreakSeconds;
    longBreakSeconds = defaultLongBreakSeconds;
    pomodoroSeconds = defaultPomodoroSeconds;
    maxTimer = defaultPomodoroSeconds;

    pomodoroMinutes = defaultPomodoroString;
    shortBreakMinutes = defaultShortBreakString;
    longBreakMinutes = defaultLongBreakString;
    inputBackground.value = defaultBackgroundImage;
    inputPhoneBackground.value = defaultPhoneBackground;   
    userInputBackground = defaultBackgroundImage;
    userInputPhoneBackground = defaultPhoneBackground;
    inputSelectBackground = userInputBackground;
    inputSelectPhoneBackground =userInputPhoneBackground;
    
    document.body.style.backgroundImage = `url(./images/${userInputBackground}.jpg)`;

    alertInvalid.style.display = 'none';
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
    modal.style.display = 'none';
    alertInvalid.style.display = 'none';
})
closeMark.addEventListener('click', ()=>{
    inputPomodoro.value = inputFieldPomo;
    inputShortBreak.value = inputFieldShort;
    inputLongBreak.value = inputFieldLong;
    inputSound.value = inputSelectSound;

    modal.close();
    modal.style.display = 'none';
    alertInvalid.style.display = 'none';
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
    timer1.style.color = 'white';
    timer1.style.borderColor = "white";

    timer2.style.background = "transparent";
    timer2.style.color = 'white';
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
        modal.style.display = 'flex';
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