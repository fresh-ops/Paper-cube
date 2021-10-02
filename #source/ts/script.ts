

function slideImg(elem) {
   console.log(elem);
   console.log(elem.querySelectorAll('img'));

   let moved = elem.querySelector('img').cloneNode(true);
   elem.querySelector('img').remove();

   elem.append(moved);

}

let timerId = setInterval(slideImg, 3000, document.getElementById('slider'));
