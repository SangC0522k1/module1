let number = parseInt(prompt("nhập số cần check"));
isPrime(number)
function isPrime(number) {
    let count = 0;
    let isPrime = false;
    if (number == 0) {
        alert(number + "k phải số nguyên tố")
    }else {
        for (let i = 1; i <= number; i++) {
            count += 1;
        }
    }
    if (count == 2) {
        isPrime = true
    }
    if (isPrime) {
        alert(number + "là số nguyên tố")
    }else {
        alert (number + "k phải số nguyên tố")
    }
    
}