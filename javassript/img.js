let imgObj = null
imgObj = document.getElementById('bong');
function init() {
    imgObj = document.getElementById('bong');
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px'
}
function moveRight() {
    imgObj.style.left = parseInt(imgObj,style.left) +10 + 'px'
}
window.onload = innit;

