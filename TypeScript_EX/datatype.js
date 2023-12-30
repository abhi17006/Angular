function add(n1, n2, showRes, str) {
    if (showRes) {
        console.log(typeof n1);
        console.log(str);
    }
    return n1 + n2;
}
var number1 = 5;
var number2 = 10;
var printRes = true;
var resut = "Hello World";
console.log(add(number1, number2, printRes, resut));
