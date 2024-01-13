
function addNo(n1: number, n2:number){
    return n1 + n2;
}

function printResult(num:number){
    console.log('Result: ' +num);
}

//callaback function and types
function addAndHandle(n1: number, n2: number, cb:(num: number)=>void){
    const result = n1 + n2;
    cb(result);
}

printResult(addNo(5,12));

//function types
let combineValues: (a: number, b: number) => number;

combineValues = addNo;
console.log("Using function types : "+combineValues(6,8));

addAndHandle(10,20, (result)=>{
    console.log("function callback and types : "+result)
});

//never type

function generateError(message: string, code: number){
    throw {message: message, errorCode: code};
}

generateError('An Error Occurred!', 500);