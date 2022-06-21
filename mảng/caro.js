let s = document.getElementById("gamecaro");

let sam = [];
let sim = "";
for (let i = 0; i < 5; i++) {
    sam[i] = new Array(0, 0, 0, 0, 0);
}
for (let i = 0; i < 5; i++) {
    sim += "<br/>";
    for (let k = 0; k < 5; k++) {
        sim += sam[i][k] + "&nbsp;&nbsp;";
    }
}
sim += "<br/><br/><input type='button' value='chơi nào' onclick='changeValue()'>"
s. innerHTML = sim;
function changeValue() {
    let positionX = prompt("X: ");
    let positionY = prompt("Y ");
    sim = "";
    sam[positionX][positionY] = "X";
    for (let i = 0; i < 5; i++) {
        sim += "<br/>";
        for (let k = 0; k < 5; j++) {
            sim += sam[i][k] +  "&nbsp;&nbsp;&nbsp;&nbsp;";
        }
    }
}
data += "<br/><br/><input type='button' value='' onclick='changeValue()'>"
s.innerHTML = "<hr/>" + sim;