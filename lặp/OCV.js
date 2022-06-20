function doanso() {
    debugger;
    let number = +prompt("số bạn đoán lớn nhất khoảng")
    let number_ran = Math.floor(Math.random() * number);
    console.log(number_ran);
    let number_check = +prompt ("số bạn đoán");
    let count= 0;
    while (number_check !== number_ran) {
        count++;
        if (count == 4) {
            alert("mất lượt đoán")
            break;
        } else if (number_check < number_ran) {
            alert("bé hơn mất rồi");
        } else {
            alert ("lớn hơn rồi nhé")
        }
        number_check = prompt ("số bạn đoán")
    }
    if (count ==4) {
        document.write("hết lượt rồi")
    } else {
        document.write("hoan hô. chúc mừng chức mừng")
    }

}


