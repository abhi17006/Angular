function add(n1: number, n2: number, showRes: boolean, str: string){

    if(showRes){
        console.log(typeof n1);
        console.log(str);
    }
    
    return n1 + n2;
}

const number1 = 5;
const number2 = 10;
const printRes = true;
const resut = "Hello World"
console.log(add(number1,number2,printRes,resut));