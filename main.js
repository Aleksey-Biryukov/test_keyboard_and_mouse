// BLOCK SCREEN

document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});

document.addEventListener("selectstart", function (event) {
  event.preventDefault();
});

function preventDefault(event) {
  const key = event.key.toLocaleLowerCase();
  const blocedKey = ["s", "p", "i", "f", "u", "r", "f1", "f3", "f5", "f11"];
  if (
    (event.ctrlKey && blocedKey.includes(key)) ||
    event.key === "F1" ||
    event.key === "F3" ||
    event.key === "F4" ||
    event.key === "F5" ||
    event.key === "F6" ||
    event.key === "F7" ||
    event.key === "F10" ||
    event.key === "F11" ||
    event.key === "F12" ||
    event.key === "Tab" ||
    event.key === "Alt" ||
    event.key === "PageUp" ||
    event.key === "PageDown" ||
    event.key === "Home" ||
    event.key === "End"
  ) {
    event.preventDefault();
    event.stopPropagation();
  }
}

document.addEventListener("keydown", preventDefault);

// main__switch DEVICE
const keyboardElement = document.querySelector(".keyboard");
const mouseElement = document.querySelector(".main__mouse");
const main__switchContainerElement = document.querySelector(".main__switch");
const buttonKeyboard = document.querySelector(".switch__button-device-keyboard");
const buttonMouse = document.querySelector(".switch__button-device-mouse");

function main__switchDevice(event) {
  if (event.target === buttonKeyboard) {
    keyboardElement.classList.remove("keyboard-not-visible");
    mouseElement.classList.add("mouse-not-visible");
  } else if (event.target === buttonMouse) {
    keyboardElement.classList.add("keyboard-not-visible");
    mouseElement.classList.remove("mouse-not-visible");
  }
}

main__switchContainerElement.addEventListener("click", main__switchDevice);

// MOUSE

const leftMouseBtnElement = document.getElementById("left-btn");
const rightMouseBtnElement = document.getElementById("right-btn");
const middleMouseBtnElement = document.getElementById("middle-btn");
const wheelMouseUpElement = document.querySelector(".mouse-container__mouse-wheel-up-img");
const wheelMouseDownElement = document.querySelector(".mouse-container__mouse-wheel-down-img");

function addActiveMouseDownAndAddLog(event) {
  const mouseElement = document.querySelector('.main__mouse')  
  const windowLogElement = document.querySelector(".main__window-log");
  const childrenLog = windowLogElement.children;
  const newLogElement = document.createElement("div");
  newLogElement.classList.add("log-item");
  if ((event.button === 0) && (!mouseElement.classList.contains('mouse-not-visible'))) {
    newLogElement.textContent = "LEFT BUTTON";
    leftMouseBtnElement.classList.add("active");
    if (childrenLog.length <= 8) {
      windowLogElement.prepend(newLogElement);
    } else {
      const lastChildeElement = windowLogElement.lastElementChild;
      windowLogElement.removeChild(lastChildeElement);
      windowLogElement.prepend(newLogElement);
    }
  } else if ((event.button === 2) && (!mouseElement.classList.contains('mouse-not-visible'))) {
    newLogElement.textContent = "RIGHT BUTTON";
    rightMouseBtnElement.classList.add("active");
    if (childrenLog.length <= 8) {
      windowLogElement.prepend(newLogElement);
    } else {
      const lastChildeElement = windowLogElement.lastElementChild;
      windowLogElement.removeChild(lastChildeElement);
      windowLogElement.prepend(newLogElement);
    }
  } else if ((event.button === 1) && (!mouseElement.classList.contains('mouse-not-visible'))) {
    event.preventDefault()
    newLogElement.textContent = "MIDDLE BUTTON";
    middleMouseBtnElement.classList.add("active");
        if (childrenLog.length <= 8) {
      windowLogElement.prepend(newLogElement);
    } else {
      const lastChildeElement = windowLogElement.lastElementChild;
      windowLogElement.removeChild(lastChildeElement);
      windowLogElement.prepend(newLogElement);
    }
  }
}

function removeActiveMouseUp(event) {
  if (event.button === 0) {
    leftMouseBtnElement.classList.remove("active");
  } else if (event.button === 2) {
    rightMouseBtnElement.classList.remove("active");
  } else if (event.button === 1) {
    middleMouseBtnElement.classList.remove("active");
  }
}

function addActiveWheelAndAddLog(event) {
  const windowLogElement = document.querySelector(".main__window-log");
  const childrenLog = windowLogElement.children;
  const newLogElement = document.createElement("div");
  newLogElement.classList.add("log-item");
  if ((event.deltaY < 0) && (!mouseElement.classList.contains('mouse-not-visible'))) {
    newLogElement.textContent = "WHEEL UP";
    wheelMouseUpElement.classList.add("arrow-mouse-active");
    wheelMouseDownElement.classList.remove("arrow-mouse-active");
        if (childrenLog.length <= 8) {
      windowLogElement.prepend(newLogElement);
    } else {
      const lastChildeElement = windowLogElement.lastElementChild;
      windowLogElement.removeChild(lastChildeElement);
      windowLogElement.prepend(newLogElement);
    }
  } else if ((event.deltaY > 0) && (!mouseElement.classList.contains('mouse-not-visible'))) {
    newLogElement.textContent = "WHEEL DOWN";
    wheelMouseDownElement.classList.add("arrow-mouse-active");
    wheelMouseUpElement.classList.remove("arrow-mouse-active");
        if (childrenLog.length <= 8) {
      windowLogElement.prepend(newLogElement);
    } else {
      const lastChildeElement = windowLogElement.lastElementChild;
      windowLogElement.removeChild(lastChildeElement);
      windowLogElement.prepend(newLogElement);
    }
  }
  setTimeout(() => {
    wheelMouseUpElement.classList.remove("arrow-mouse-active");
    wheelMouseDownElement.classList.remove("arrow-mouse-active");
  }, 120);
}

document.addEventListener("mousedown", addActiveMouseDownAndAddLog);
document.addEventListener("mouseup", removeActiveMouseUp);
document.addEventListener("wheel", addActiveWheelAndAddLog);

// KEYBOARD


function addActiveKeyDownAndAddLog(event) {
  const key = document.querySelector(`[data-code='${event.code}']`);
  const keyboardElementIsActive = document.querySelector('.keyboard')
  if (key && (!keyboardElementIsActive.classList.contains('keyboard-not-visible'))){
  key.classList.add("active-key");
  key.classList.remove("used-key");
  
  const windowLogElement = document.querySelector(".main__window-log");
  const childrenLog = windowLogElement.children;
  const newLogElement = document.createElement("div");
  newLogElement.classList.add("log-item");
    if(event.code === 'Space') {
      newLogElement.textContent = 'SPACE'
    } else if((/[a-z]/g.test(event.key) || (/[а-я]/g.test(event.key)))){
      newLogElement.textContent = event.key.toUpperCase();
    } else {
      newLogElement.textContent = event.key
   }
  if (childrenLog.length <= 8) {
    windowLogElement.prepend(newLogElement);
  } else {
    const lastChildeElement = windowLogElement.lastElementChild;
    windowLogElement.removeChild(lastChildeElement);
    windowLogElement.prepend(newLogElement);
  }
}
}

function addActiveKeyUp(event) {
  const key = document.querySelector(`[data-code='${event.code}']`);
  if (!key) return;
  key.classList.remove("active-key");
  key.classList.add("used-key");
}

document.addEventListener("keydown", addActiveKeyDownAndAddLog);
document.addEventListener("keyup", addActiveKeyUp);

// RADIO CHECK 

const numRadioCheckElement = document.getElementById('num-check')
const capsRadioCheckElement = document.getElementById('caps-check')
const scrollRadioCheckElement = document.getElementById('scroll-check')


function radioPreventDefault (event){
  if((event.target === numRadioCheckElement) 
    || (event.target === capsRadioCheckElement) 
    || (event.target === scrollRadioCheckElement)) {
        event.preventDefault()
  }
}

function addCheckedRadioBtn (event){    
  if(event.code === 'NumLock'){
      if(!numRadioCheckElement.hasAttribute('checked')){
        numRadioCheckElement.setAttribute('checked', 'true')
      } else if(numRadioCheckElement.hasAttribute('checked')){
        numRadioCheckElement.removeAttribute('checked')
      }
  } else if(event.code === 'CapsLock'){
      if(!capsRadioCheckElement.hasAttribute('checked')){
        capsRadioCheckElement.setAttribute('checked', 'true')
      } else if(capsRadioCheckElement.hasAttribute('checked')){
        capsRadioCheckElement.removeAttribute('checked')
      }
  } else if(event.code === 'ScrollLock'){
      if(!scrollRadioCheckElement.hasAttribute('checked')){
        scrollRadioCheckElement.setAttribute('checked', 'true')
      } else if(scrollRadioCheckElement.hasAttribute('checked')){
        scrollRadioCheckElement.removeAttribute('checked')
      }
  }}

document.addEventListener('click', radioPreventDefault)
document.addEventListener("keydown", addCheckedRadioBtn)

