function slideImg(elem) {
    console.log(elem);
    console.log(elem.querySelectorAll('img'));
    var moved = elem.querySelector('img').cloneNode(true);
    elem.querySelector('img').remove();
    elem.append(moved);
}
var timerId = setInterval(slideImg, 3000, document.getElementById('slider'));
