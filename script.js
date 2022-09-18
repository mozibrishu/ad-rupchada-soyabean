let thumb = document.querySelector('.item_3');

thumb.addEventListener('mousedown', downOperation);
thumb.addEventListener('touchstart', downOperation);
thumb.addEventListener('mouseup', upOperation);
thumb.addEventListener('touchend', upOperation);


function downOperation() {
    removeClass('.item_3', 'scaleOpacity-animation');
    timeOutId = setTimeout(function () {
        addClass('.item_3', 'hidden');
    }, 600);
}

function upOperation() {
    clearTimeout(timeOutId);
    addClass('.item_3', 'scaleOpacity-animation');
}



// 
function removeClass(elementId, className) {
    document.querySelector(elementId).classList.remove(className);
}
function addClass(elementId, className) {
    document.querySelector(elementId).classList.add(className);
}