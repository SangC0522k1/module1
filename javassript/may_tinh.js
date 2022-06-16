let view = document.getElementById("view");
function inputValue(value) {
    view.value += value;
    hasChooseOperand = true
}
function result() {
    let result = eval(view.value);
    view.value = result;
    hasChooseOperand = true
}
function xoa() {
    view.value="";
    hasChooseOperand = true
}