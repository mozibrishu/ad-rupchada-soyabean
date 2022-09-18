let thumb = document.querySelector('.item_3');
let slide_2_elms = document.querySelectorAll('.slide_2');


thumb.addEventListener('mousedown', downOperation);
thumb.addEventListener('touchstart', downOperation);
thumb.addEventListener('mouseup', upOperation);
thumb.addEventListener('touchend', upOperation);


function downOperation() {
    removeClass('.item_3', 'scaleOpacity-animation');
    timeOutId = setTimeout(function () {
        addClass('.item_3', 'zoomOut-animation');
        addClass('.item_2', 'zoomOut-animation');

        slide_2_elms.forEach(function (el){
            el.classList.remove('hidden');
            el.classList.add('zoomIn-animation');
        });
        setTimeout(function () {
            slide_2_elms.forEach(function (el){
                el.classList.remove('zoomIn-animation');
            });
            addClass('.item_8', 'scaleOpacity-animation');
            addClass('.item_9', 'scaleOpacity-animation');
        },1000);
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