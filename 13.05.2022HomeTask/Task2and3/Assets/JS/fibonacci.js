// Task - 2 and 3 Fibonachi
let m = prompt("How many numbers does fibonacchi has ? : ")
let n = prompt("Which fibonacchi number do you want to see ? : ");
let fibonachiDigits = [0, 1];
function Fibonachi(m, n) {
    let firstDigit = 0;
    let lastDigit = 1;
    let sum = 0;
    for (var i = 0; i < m - 2; i++) {
        sum = firstDigit + lastDigit;
        firstDigit = lastDigit;
        lastDigit = sum;
        fibonachiDigits.push(sum);
    }
    return fibonachiDigits[n - 1];
}
Fibonachi(m,n);
console.log("Fibonacchi numbers:", fibonachiDigits.join(", "));
alert(`${n}. fibonacchi number is: ` + " " + Fibonachi(m, n));