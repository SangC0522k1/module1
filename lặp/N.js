function N(number) {
    let constN =0;
    for (let a = 2; a < 1000; a++) {
        if (constN<number){
            for (s = 1; s <=a; s++) {
                if (a % s ==0) {
                   constN +=1;
                }
            }
            if (count ==2) {
                Document.write(a + "<br>");
                constN += 1;
            }
            count = 0
        }else {
            break;
        }   
    } 

}
let number = parseInt(prompt("nhập N"));


//let count = 0
//for (a = 1; a <=40; a++) {
    //for (let a =1; a <= Number; a++) {
        //if (number % a ==0) {
            //count++
        //}
    //}
    //if (count == 2) {
        //count++
    //} else {
        //document.write("N")
    //}

//}
//document.write(count)

