var elem = document.getElementById('slider');
var items = elem.querySelectorAll('img');
var itemCount = items.length;
var shift = elem.clientWidth;
var shiftCounter = 0;
var pause = false;
elem.onmouseover = function () {
    pause = true;
};
elem.onmouseout = function () {
    pause = false;
};
function slideImg() {
    if (pause) {
        return;
    }
    shiftCounter++;
    elem.style.transform = "translate(" + -shift * (shiftCounter % itemCount) + "px)";
}
var t = 'fff';
var timerId = setInterval(slideImg, 3000);
