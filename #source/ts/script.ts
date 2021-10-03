let elem = document.getElementById('slider');
const items = elem.querySelectorAll('img');
const itemCount = items.length;
const shift = elem.clientWidth;
let shiftCounter = 1;
let pause = false

elem.onmouseover = function () {
   pause = true;
};

elem.onmouseout = function () {
   pause = false;
};

function slideImg() {
   if (pause) { return }
   shiftCounter++;
   elem.style.transform = `translate(${-shift * (shiftCounter % itemCount)}px)`
}



var timerId = setInterval(slideImg, 1500);
