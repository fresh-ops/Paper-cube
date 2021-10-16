const elem = document.getElementById('slider');
const items = elem.querySelectorAll('img');
const itemCount: number = items.length;
const shift: number = elem.clientWidth;
let shiftCounter: number = 0;
let pause: boolean = false;

elem.onmouseover = function () {
   pause = true;
};

elem.onmouseout = function () {
   pause = false;
};

function slideImg() {
   if (pause) { return }
   shiftCounter++;
   elem.style.transform = `translate(${-shift * (shiftCounter % itemCount)}px)`;
}

let t: string = 'fff';

let timerId = setInterval(slideImg, 3000);
