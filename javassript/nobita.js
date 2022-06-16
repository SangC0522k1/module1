function upArrowPressed() {
    let element = document.getElementById("nobita");
    element.style.top = parseInt(element.style.top) - 5 + 'px';
}
function downArrowPressed() {
    var element = document.getElementById("nobita");
    
    element.style.top = parseInt(element.style.top) + 5 + 'px';

    console.log(element.height);
}
function leftArrowPressed() {
    var element = document.getElementById("nobita");
    element.style.left = parseInt(element.style.left) - 5 + 'px';
}
function rightArrowPressed() {
    var element = document.getElementById("nobita");
    element.style.left = parseInt(element.style.left) + 5 + 'px';

}
function moveSelection(evt) {
    console.log("aaaaaaaaaaaa")
    console.log(evt);
    switch (evt.keyCode) {
        case 37:
            leftArrowPressed();
            break;
        case 38:
            rightArrowPressed();
            break;
        case 39:
            upArrowPressed();
            break;
        case 40:
            downArrowPressed();
            break;
    }
}
function docReady() {
    window.addEventListener('keydown', moveSelection);
}